// Voix de dessin animé en « babil » (charabia expressif, façon Sims ou Pingu) : synthèse de voyelles
// à formants, rythme et intonation calqués sur le texte. Chaque personnage a son profil.
const fs = require('fs');
const SR = 44100;

const PROFILS = {
  // Quentin : voix moyenne, rebondissante, un peu ahurie.
  q: { f0: 138, dur: 0.105, form: 1.0, bright: 0.55, glide: 0.05, bounce: 0.16, vib: 0.01, nasal: 0 },
  // Brutus : aigu, nasillard, chaque syllabe descend d'un ton moqueur (« nyeh »).
  b: { f0: 270, dur: 0.1, form: 1.24, bright: 1.0, glide: 0.24, bounce: 0.07, vib: 0.03, nasal: 0.9 },
  // Invités (Einstein…) : grave et posé.
  e: { f0: 105, dur: 0.12, form: 0.92, bright: 0.4, glide: 0.04, bounce: 0.1, vib: 0.015, nasal: 0 },
};
const VOY = { a: [730, 1090, 2440], e: [500, 1750, 2480], i: [300, 2250, 2900], o: [520, 900, 2400], u: [320, 850, 2250], y: [300, 1900, 2400] };

function seedRng(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 10000) / 10000; };
}
const sansAccents = (t) => t.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

// Découpe en syllables approximatives, avec les pauses de ponctuation.
function syllabes(texte) {
  const out = [];
  const mots = sansAccents(texte).replace(/…/g, ' … ').match(/[a-z']+|[.,!?…]/g) || [];
  for (const m of mots) {
    if (/^[.,!?…]$/.test(m)) { if (out.length) out[out.length - 1].ponct = m; continue; }
    let w = m.replace(/'/g, '');
    if (w.length > 3) w = w.replace(/([^aeiouy])(e|es|ent)$/, '$1');
    const groupes = w.match(/[^aeiouy]*[aeiouy]+/g) || [w + 'e'];
    groupes.forEach((g, i) => {
      const cons = (g.match(/^[^aeiouy]*/) || [''])[0];
      let v = g.slice(cons.length);
      v = v.startsWith('ou') ? 'u' : /^(eau|au)/.test(v) ? 'o' : v.startsWith('oi') ? 'a' : /^(ai|ei)/.test(v) ? 'e' : v[0];
      out.push({ cons, v, finMot: i === groupes.length - 1 });
    });
  }
  return out;
}

function babil(texte, qui = 'q') {
  const P = PROFILS[qui] || PROFILS.q;
  const rnd = seedRng(qui + texte);
  const syl = syllabes(texte);
  const morceaux = [];
  let phase = 0;
  const n = syl.length;
  syl.forEach((s, i) => {
    const fin = s.ponct && /[.!?…]/.test(s.ponct);
    let d = P.dur * (0.85 + 0.3 * rnd()) * (fin ? 1.7 : 1);
    const base = P.f0 * (1 + P.bounce * Math.sin(i * 1.9 + rnd()));
    const amp = s.ponct === '!' ? 1.15 : 1;
    // consonne d'attaque
    const c = s.cons.replace(/h/g, '');
    if (c) {
      const souffle = /[sfzjxv]|ch/.test(c), occl = /[ptkbdgcq]/.test(c);
      const dc = souffle ? 0.055 : occl ? 0.02 : 0.035;
      const N = Math.round(dc * SR), seg = new Float32Array(N);
      let prev = 0;
      for (let k = 0; k < N; k++) {
        const e = Math.sin(Math.PI * k / N);
        if (souffle || occl) { const w = rnd() * 2 - 1; seg[k] = (w - prev) * 0.22 * e; prev = w; }
        else { phase += 2 * Math.PI * base * 0.9 / SR; seg[k] = 0.25 * Math.sin(phase) * e; }
      }
      morceaux.push(seg);
    }
    // voyelle
    const [F1, F2, F3] = (VOY[s.v] || VOY.a).map((f) => f * P.form);
    const N = Math.round(d * SR), seg = new Float32Array(N);
    for (let k = 0; k < N; k++) {
      const u = k / N, t = k / SR;
      let f0 = base * (1 + P.glide * (0.6 - 1.2 * u)) * (1 + P.vib * Math.sin(2 * Math.PI * 6 * t));
      if (fin && s.ponct === '?') f0 *= 1 + 0.4 * u;
      if (fin && s.ponct === '.') f0 *= 1 - 0.18 * u;
      if (fin && s.ponct === '!') f0 *= 1.12;
      phase += 2 * Math.PI * f0 / SR;
      let v = 0;
      const K = Math.min(28, Math.floor(7000 / f0));
      for (let h = 1; h <= K; h++) {
        const f = h * f0;
        let a = Math.exp(-(((f - F1) / 110) ** 2)) + 0.65 * Math.exp(-(((f - F2) / 150) ** 2)) + 0.3 * Math.exp(-(((f - F3) / 200) ** 2));
        a = a * (0.25 + P.bright * 0.75) / Math.pow(h, 0.55 - 0.25 * P.bright) + 0.02 / h;
        if (P.nasal) a *= 1 + P.nasal * Math.exp(-(((f - 290 * P.form) / 70) ** 2));
        v += a * Math.sin(h * phase);
      }
      const env = Math.min(1, k / (0.012 * SR)) * Math.min(1, (N - k) / (0.04 * SR));
      seg[k] = v * env * 0.18 * amp;
    }
    morceaux.push(seg);
    const pause = s.ponct === ',' ? 0.14 : s.ponct === '…' ? 0.32 : fin ? 0.2 : s.finMot ? 0.045 : 0.012;
    morceaux.push(new Float32Array(Math.round(pause * SR)));
  });
  const L = morceaux.reduce((a, m) => a + m.length, 0), out = new Float32Array(L);
  let o = 0; for (const m of morceaux) { out.set(m, o); o += m.length; }
  let pk = 0; for (const x of out) pk = Math.max(pk, Math.abs(x));
  for (let k = 0; k < L; k++) out[k] = (out[k] / (pk || 1)) * 0.85;
  return out;
}

function ecrireWav(file, f32) {
  const b = Buffer.alloc(44 + f32.length * 2);
  b.write('RIFF', 0); b.writeUInt32LE(36 + f32.length * 2, 4); b.write('WAVE', 8); b.write('fmt ', 12);
  b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(SR, 24); b.writeUInt32LE(SR * 2, 28);
  b.writeUInt16LE(2, 32); b.writeUInt16LE(16, 34); b.write('data', 36); b.writeUInt32LE(f32.length * 2, 40);
  for (let k = 0; k < f32.length; k++) b.writeInt16LE(Math.round(Math.max(-1, Math.min(1, f32[k])) * 32767), 44 + k * 2);
  fs.writeFileSync(file, b);
}

// Musique de fond : cordes pincées (Karplus-Strong), grille C G Am F, assez basse pour laisser parler.
function musique(dur, { bpm = 112, muets = [] } = {}) {
  const out = new Float32Array(Math.ceil(dur * SR));
  const notes = { C: [130.81, 164.81, 196.0, 261.63], G: [98.0, 123.47, 146.83, 196.0], Am: [110.0, 130.81, 164.81, 220.0], F: [87.31, 110.0, 130.81, 174.61] };
  const grille = ['C', 'G', 'Am', 'F'], croche = 60 / bpm / 2, motif = [0, 2, 1, 3, 0, 2, 1, 2];
  const pince = (freq, t0, gain, len = 1.2) => {
    const Np = Math.max(2, Math.round(SR / freq)), buf = Float32Array.from({ length: Np }, () => Math.random() * 2 - 1);
    const s0 = Math.round(t0 * SR);
    for (let k = 0; k < len * SR && s0 + k < out.length; k++) { const i = k % Np; const v = buf[i]; buf[i] = 0.5 * (v + buf[(i + 1) % Np]) * 0.997; out[s0 + k] += v * gain; }
  };
  for (let n = 0, t = 0; t < dur; n++, t = n * croche) {
    const ch = notes[grille[Math.floor(n / 8) % 4]];
    pince(ch[motif[n % 8]] * 2, t, 0.16);
    if (n % 8 === 0) pince(ch[0] / 2, t, 0.3, 1.8);
    if (n % 4 === 2) pince(ch[0], t, 0.1, 0.4);
  }
  for (let k = 0; k < out.length; k++) {
    const t = k / SR;
    let g = 1;
    for (const [a, b] of muets) { if (t > a - 0.3 && t < b + 0.3) g = Math.min(g, Math.max(0, Math.max((a - t) / 0.3, (t - b) / 0.3))); }
    out[k] *= g;
  }
  let pk = 0; for (const x of out) pk = Math.max(pk, Math.abs(x));
  for (let k = 0; k < out.length; k++) out[k] = (out[k] / (pk || 1)) * 0.7;
  return out;
}

module.exports = { babil, musique, ecrireWav, SR };
