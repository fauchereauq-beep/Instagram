// Moteur de dessin animé : voix (espeak-ng + MBROLA), bouche synchronisée sur l'audio, gestes, caméra, bruitages.
// Format Reel 1080 x 1920 : bandeau haut (accroche / voix off), scène 1080 x 1350, bandeau bas.
// Usage : node anim/<episode>.js   (nécessite : apt-get install espeak-ng mbrola mbrola-fr1)
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const K = require('../src/v3.js');

const FPS = 24, W = 1080, H = 1920, SY = 285;
const ROOT = path.join(__dirname, '..');
const CACHE = path.join(ROOT, 'anim', '.cache');
fs.mkdirSync(CACHE, { recursive: true });
const run = (cmd, args) => execFileSync(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] });
const hash = (s) => crypto.createHash('md5').update(s).digest('hex').slice(0, 12);

// ---------- voix ----------
const VOIX = {
  q: { v: 'mb-fr1', s: 158, p: 40, fx: 'aresample=44100,volume=1.6' },
  b: { v: 'mb-fr1', s: 168, p: 60, fx: 'aresample=44100,asetrate=44100*1.34,aresample=44100,atempo=0.84,volume=1.5' },
  e: { v: 'mb-fr1', s: 140, p: 30, fx: 'aresample=44100,asetrate=44100*0.9,aresample=44100,atempo=1.11,volume=1.6' },
};
function lireWav(file) {
  const b = fs.readFileSync(file);
  let o = 12, sr = 44100, data = null;
  while (o < b.length - 8) {
    const id = b.toString('ascii', o, o + 4), n = b.readUInt32LE(o + 4);
    if (id === 'fmt ') sr = b.readUInt32LE(o + 12);
    if (id === 'data') { data = b.subarray(o + 8, o + 8 + n); break; }
    o += 8 + n + (n % 2);
  }
  const s = new Int16Array(data.buffer, data.byteOffset, Math.floor(data.length / 2));
  return { sr, s };
}
function enveloppe({ sr, s }) {
  const win = Math.floor(sr / FPS), rms = [];
  for (let i = 0; i < s.length; i += win) { let a = 0; for (let j = i; j < Math.min(i + win, s.length); j++) a += s[j] * s[j]; rms.push(Math.sqrt(a / win)); }
  const max = Math.max(...rms) || 1;
  return rms.map((r, i) => r / max > 0.22 && (i % 5 !== 4)); // une petite fermeture régulière, comme un vrai battement de bouche
}
const { babil, musique, ecrireWav } = require('./babil.js');
function voix(who, texte) {
  const out = path.join(CACHE, `b_${who}_${hash(who + texte)}.wav`);
  if (!fs.existsSync(out)) ecrireWav(out, babil(texte, who));
  const w = lireWav(out);
  return { file: out, dur: w.s.length / w.sr, env: enveloppe(w) };
}
// Traitement d'une réplique enregistrée : silence retiré, nettoyage, compression douce, niveau constant.
// Brutus : voix montée dans les aigus sans accélérer (rubberband), timbre « dessin animé ».
const TRAITEMENT = {
  q: 'rubberband=pitch=1.06',
  b: 'rubberband=pitch=1.42:formant=shifted:tempo=1.04',
  e: 'rubberband=pitch=0.86',
};
function voixEnregistree(who, src) {
  const out = path.join(CACHE, `r_${who}_${hash(src + fs.statSync(src).mtimeMs)}.wav`);
  if (!fs.existsSync(out)) {
    const af = ['silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05', 'areverse', 'silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.08', 'areverse',
      'highpass=f=90', TRAITEMENT[who] || 'anull', 'acompressor=threshold=-20dB:ratio=3:attack=8:release=120', 'loudnorm=I=-18:TP=-2:LRA=7'].join(',');
    run('ffmpeg', ['-y', '-loglevel', 'error', '-i', src, '-af', af, '-ac', '1', '-ar', '44100', '-c:a', 'pcm_s16le', out]);
  }
  const w = lireWav(out);
  return { file: out, dur: w.s.length / w.sr, env: enveloppe(w) };
}
function voixMuette(texte) {
  const dur = 0.2 + texte.split(/\s+/).length * 0.26;
  return { file: null, dur, env: [] };
}
function voixRobot(who, texte) {
  const out = path.join(CACHE, `v_${who}_${hash(who + texte)}.wav`);
  if (!fs.existsSync(out)) {
    const tmp = out + '.raw.wav', V = VOIX[who] || VOIX.q;
    run('espeak-ng', ['-v', V.v, '-s', String(V.s), '-p', String(V.p), '-w', tmp, texte]);
    run('ffmpeg', ['-y', '-loglevel', 'error', '-i', tmp, '-af', V.fx, '-ac', '1', '-ar', '44100', '-c:a', 'pcm_s16le', out]);
    fs.unlinkSync(tmp);
  }
  const w = lireWav(out);
  return { file: out, dur: w.s.length / w.sr, env: enveloppe(w) };
}

// ---------- bruitages (synthétisés) ----------
const SFX = {
  crunch: 'anoisesrc=d=0.35:c=brown:a=0.8,highpass=f=400,afade=t=out:st=0.04:d=0.3',
  buzz: "aevalsrc='0.3*sin(2*PI*190*t)*(0.5+0.5*sin(2*PI*9*t))*lt(mod(t,0.45),0.3)':d=0.9,lowpass=f=1500",
  sirene: "aevalsrc='0.14*sin(2*PI*t*(620+160*sin(2*PI*1.6*t)))':d=1.4,lowpass=f=2000",
  pop: "aevalsrc='0.45*sin(2*PI*t*(380+1700*t))*exp(-14*t)':d=0.25",
  boing: "aevalsrc='0.4*sin(2*PI*t*(180+260*sin(2*PI*7*t)))*exp(-4*t)':d=0.7",
  whoosh: 'anoisesrc=d=0.5:c=pink:a=0.5,bandpass=f=1400,afade=t=in:d=0.2,afade=t=out:st=0.22:d=0.28',
  souffle: 'anoisesrc=d=1.6:c=pink:a=0.35,lowpass=f=900,afade=t=in:d=0.4,afade=t=out:st=0.7:d=0.9',
  accord: "aevalsrc='0.12*(sin(2*PI*220*t)+sin(2*PI*277.2*t)+sin(2*PI*329.6*t)+sin(2*PI*440*t))*exp(-0.9*t)':d=3",
  ding: "aevalsrc='0.3*(sin(2*PI*1318*t)+0.5*sin(2*PI*2637*t))*exp(-5*t)':d=0.8",
  tic: "aevalsrc='0.4*sin(2*PI*1800*t)*exp(-60*t)':d=0.08",
  crash: "aevalsrc='0.6*sin(2*PI*70*t)*exp(-10*t)+0.18*(random(0)*2-1)*exp(-20*t)':d=0.5,lowpass=f=2500",
  dramatique: "aevalsrc='0.32*(sin(2*PI*t*if(lt(t,0.2),196,if(lt(t,0.4),185,147)))+0.5*sin(4*PI*t*if(lt(t,0.2),196,if(lt(t,0.4),185,147))))*if(lt(t,0.4),1,exp(-1.2*(t-0.4)))':d=1.8",
  tictac: "aevalsrc='0.5*(sin(2*PI*2200*t)*exp(-80*mod(t,0.5)))*lt(mod(t,0.5),0.05)':d=1",
  victoire: "aevalsrc='0.22*(sin(2*PI*t*if(lt(t,0.12),523,if(lt(t,0.24),659,if(lt(t,0.36),784,1047))))+0.4*sin(4*PI*t*if(lt(t,0.12),523,if(lt(t,0.24),659,if(lt(t,0.36),784,1047)))))*if(lt(t,0.36),1,exp(-2.5*(t-0.36)))':d=1.4",
  gloups: "aevalsrc='0.4*sin(2*PI*t*(500-380*t/0.4))*exp(-3*t)':d=0.4",
};
function sfx(nom) {
  const out = path.join(CACHE, `s_${nom}.wav`);
  if (!fs.existsSync(out)) run('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'lavfi', '-i', SFX[nom], '-ac', '1', '-ar', '44100', out]);
  return out;
}

// ---------- utilitaires d'animation ----------
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const ease = (u) => (u < 0.5 ? 2 * u * u : 1 - Math.pow(-2 * u + 2, 2) / 2);
const outBack = (u) => { const c = 1.9; return 1 + (c + 1) * Math.pow(u - 1, 3) + c * Math.pow(u - 1, 2); };
const PIEDS = { q: [200, 790], b: [180, 575], e: [200, 790] };
const DESS = { q: (o) => K.G.quentin(o), b: (o) => K.G.brutus(o), e: (o) => K.G.einstein(o) };

// Plan → HTML (toutes les variantes de personnages, éléments et bulles sont posés une fois, puis animés).
function planHTML(plan, idx) {
  const L = [];
  for (const [cid, c] of Object.entries(plan.chars || {})) {
    const s = c.o.s || (c.kind === 'b' ? 0.74 : 0.82), [fx, fy] = PIEDS[c.kind];
    const origin = `${(c.o.x || 0) + fx * s}px ${(c.o.y || 0) + fy * s}px`;
    const poses = { base: {}, ...(c.poses || {}) };
    const vs = [];
    for (const [pn, p] of Object.entries(poses)) {
      const o = { ...c.o, ...p };
      const talk = p.talk || c.talk || 'open';
      vs.push([`${pn}_idle`, o], [`${pn}_talk`, { ...o, mouth: talk }], [`${pn}_blink`, { ...o, eyes: { mode: 'closed' } }]);
    }
    L.push(`<div class="C" id="c${idx}_${cid}" style="position:absolute;inset:0;transform-origin:${origin};z-index:${c.z || 1}">${vs.map(([v, o]) => `<div class="V" id="c${idx}_${cid}_${v}" style="display:none;position:absolute;inset:0">${K.S(DESS[c.kind](o))}</div>`).join('')}</div>`);
  }
  const els = Object.entries(plan.els || {}).map(([eid, e]) => `<div class="E" id="e${idx}_${eid}" style="position:absolute;inset:0;opacity:0;transform-origin:${(e.o || [540, 675]).join('px ')}px;z-index:${e.z ?? 3}">${e.html}</div>`);
  return `<div class="P" id="p${idx}" style="display:none;position:absolute;inset:0"><div id="cam${idx}" style="position:absolute;inset:0;transform-origin:0 0">
    ${plan.bg || ''}${L.join('')}<div style="position:absolute;inset:0;z-index:2">${plan.front || ''}</div>${els.join('')}</div></div>`;
}

// Chronologie : chaque « temps » (beat) peut parler, changer de pose, montrer un élément, bouger la caméra, jouer un bruitage.
function chrono(plan, pi, ep, num) {
  let t = plan.start || 0;
  const tl = { poses: [], shows: [], hides: [], acts: [], cams: [], audio: [], talks: [], tops: [], blancs: [] };
  for (const [bi, b] of (plan.beats || []).entries()) {
    if (b.pre) t += b.pre;
    const st = t;
    if (b.clear) tl.shows.filter((x) => x.id.startsWith('bl')).forEach((x) => tl.hides.push({ id: x.id, at: st }));
    for (const [who, pose] of Object.entries(b.pose || {})) tl.poses.push({ who, at: st, pose });
    for (const id of [].concat(b.show || [])) tl.shows.push({ id, at: st });
    for (const id of [].concat(b.hide || [])) tl.hides.push({ id, at: st });
    for (const [who, a] of Object.entries(b.act || {})) tl.acts.push({ who, at: st, a });
    if (b.cam) tl.cams.push({ at: st, ...b.cam });
    for (const s of [].concat(b.sfx || [])) { const [nom, dt = 0] = [].concat(s); tl.audio.push({ file: sfx(nom), at: st + dt, vol: 0.7, bus: 'sfx' }); }
    if (b.blanc) tl.blancs.push([st, st + b.blanc]);
    if (b.top !== undefined) tl.tops.push({ at: st, html: b.top });
    if (b.say) {
      const n = String(++num.n).padStart(2, '0');
      const dir = path.join(ROOT, 'voix', ep.slug);
      const rec = fs.existsSync(dir) && fs.readdirSync(dir).find((f) => f.startsWith(n + '.') && /\.(m4a|mp3|wav|ogg|aac|opus|webm)$/i.test(f));
      const qui = b.voice || b.who, texte = b.tts || b.say.replace(/<[^>]+>/g, '');
      const v = rec ? voixEnregistree(qui, path.join(dir, rec)) : ep.voixManquantes === 'babil' ? voix(qui, texte) : voixMuette(texte);
      if (v.file) tl.audio.push({ file: v.file, at: st, vol: 1, bus: 'dlg' });
      tl.talks.push({ who: b.who, at: st, dur: v.dur, env: v.env, vo: !!b.vo, txt: b.cap === false ? null : (b.cap || b.say), gapEnd: st + v.dur + (b.gap ?? 0.28) + (b.wait || 0) });
      if (b.bubble) {
        const id = `bl${bi}`;
        plan.els[id] = { html: K.bulle({ ...b.bubble, who: b.voice || b.who, text: b.say }), o: [b.bubble.x + b.bubble.w / 2, b.bubble.yb], z: 5, anim: 'pop', who: b.who };
        // une seule bulle par personnage : la précédente disparaît
        const prev = tl.shows.filter((s) => plan.els[s.id] && plan.els[s.id].who === b.who && s.id.startsWith('bl')).pop();
        if (prev) tl.hides.push({ id: prev.id, at: st });
        tl.shows.push({ id, at: st });
      }
      t += v.dur + (b.gap ?? 0.28);
    }
    if (b.wait) t += b.wait;
  }
  for (const [eid, e] of Object.entries(plan.els || {})) if (e.always) tl.shows.unshift({ id: eid, at: -10 });
  tl.dur = t + (plan.tail ?? 0.5);
  return tl;
}

function etat(plan, tl, idx, tau) {
  const st = { chars: {}, els: {}, cam: '', top: null };
  // caméra
  let cam = { s: 1, cx: 540, cy: 675 }, from = cam;
  for (const c of tl.cams) {
    if (tau < c.at) break;
    const to = { s: c.s ?? from.s, cx: c.cx ?? from.cx, cy: c.cy ?? from.cy };
    const u = ease(clamp((tau - c.at) / (c.d ?? 0.5), 0, 1));
    cam = { s: from.s + (to.s - from.s) * u, cx: from.cx + (to.cx - from.cx) * u, cy: from.cy + (to.cy - from.cy) * u };
    from = to;
  }
  const drift = 1 + (plan.drift ?? 0.03) * (tau / tl.dur);
  const s = cam.s * drift;
  const tx = clamp(540 - s * cam.cx, W - 1080 * s, 0), ty = clamp(675 - s * cam.cy, 1350 - 1350 * s, 0);
  let shake = 0;
  for (const a of tl.acts) if (a.a === 'secousse' && tau >= a.at && tau < a.at + 0.5) shake = 12 * Math.sin((tau - a.at) * 70) * (1 - (tau - a.at) / 0.5);
  st.cam = `translate(${(tx + shake).toFixed(1)}px,${ty.toFixed(1)}px) scale(${s.toFixed(4)})`;
  // personnages
  for (const [cid, c] of Object.entries(plan.chars || {})) {
    const pose = tl.poses.filter((p) => p.who === cid && p.at <= tau).map((p) => p.pose).pop() || c.pose || 'base';
    const talk = tl.talks.find((t) => t.who === cid && !t.vo && tau >= t.at && tau < t.at + t.dur);
    let v = 'idle', y = 0, x = 0, r = 0, sx = 1, sy = 1 + 0.008 * Math.sin(tau * 2.4 + cid.length);
    if (talk) {
      const f = Math.floor((tau - talk.at) * FPS);
      v = talk.env.length ? (talk.env[f] ? 'talk' : 'idle') : 'idle';
      y = -5 * Math.abs(Math.sin(tau * 9)); r = 1.2 * Math.sin(tau * 5);
    } else {
      const ph = (tau + (cid === 'b' ? 1.3 : 0)) % 3.4;
      if (ph < 0.13) v = 'blink';
    }
    for (const a of tl.acts.filter((a) => a.who === cid && tau >= a.at)) {
      const u = tau - a.at;
      if (a.a === 'saut' && u < 0.45) { const k = u / 0.45; y -= 90 * 4 * k * (1 - k); sy *= 1 + 0.08 * Math.sin(k * Math.PI); }
      if (a.a === 'tremble' && u < 0.9) x += 9 * Math.sin(u * 80);
      if (a.a === 'entre' && u < 0.6) x += 760 * (1 - outBack(u / 0.6));
      if (a.a === 'entre' && u < 0) x += 760;
      if (a.a === 'ecrase' && u < 0.35) { const k = Math.sin((u / 0.35) * Math.PI); sy *= 1 - 0.12 * k; sx *= 1 + 0.1 * k; }
    }
    if (tl.acts.some((a) => a.who === cid && a.a === 'entre' && tau < a.at)) x += 900;
    st.chars[cid] = { v: `c${idx}_${cid}_${pose}_${v}`, t: `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${r.toFixed(2)}deg) scale(${sx.toFixed(3)},${sy.toFixed(3)})` };
  }
  // éléments et bulles
  for (const [eid, e] of Object.entries(plan.els || {})) {
    const sh = tl.shows.filter((x) => x.id === eid && x.at <= tau).pop();
    const hd = tl.hides.filter((x) => x.id === eid && x.at <= tau).pop();
    let o = 0, tr = '';
    if (sh && !(hd && hd.at >= sh.at)) {
      const u = tau - sh.at;
      o = 1;
      const anim = e.anim || 'pop';
      if (anim === 'pop') { const k = clamp(u / 0.28, 0, 1); tr = `scale(${(0.4 + 0.6 * outBack(k)).toFixed(3)})`; o = clamp(u / 0.08, 0, 1); }
      if (anim === 'ono') { const k = clamp(u / 0.25, 0, 1); tr = `scale(${(0.2 + 0.8 * outBack(k)).toFixed(3)}) rotate(${(4 * Math.sin(u * 18) * Math.max(0, 1 - u)).toFixed(2)}deg)`; }
      if (anim === 'glisse') { const k = ease(clamp(u / 0.45, 0, 1)); tr = `translateY(${((1 - k) * 260).toFixed(1)}px)`; o = k; }
      if (anim === 'fondu') o = clamp(u / 0.5, 0, 1);
      if (anim === 'pousse') { const k = ease(clamp(u / (e.d || 2), 0, 1)); tr = `scale(${(0.05 + 0.95 * k).toFixed(3)})`; }
      if (anim === 'trait') { const k = ease(clamp(u / 0.4, 0, 1)); tr = `scaleX(${k.toFixed(3)})`; }
    }
    st.els[eid] = { o: +o.toFixed(3), t: tr };
  }
  // légende active
  const tk = tl.talks.filter((x) => x.txt && tau >= x.at && tau < Math.max(x.gapEnd, x.at + x.dur + 0.5)).pop();
  if (tk) {
    const mots = tk.txt.split(' '), lens = mots.map((m) => m.length + 1), tot = lens.reduce((a, b) => a + b, 0);
    const prog = clamp((tau - tk.at) / Math.max(0.2, tk.dur * 0.92), 0, 1) * tot;
    let acc = 0, html = '';
    mots.forEach((m, i) => { const vis = acc <= prog + 0.01; const cur = vis && acc + lens[i] > prog && prog < tot; acc += lens[i]; html += `<span class="${vis ? (cur ? 'w c' : 'w') : 'w h'}">${m}</span> `; });
    st.cap = `<div class="cap ${tk.who}">${html}</div>`;
  } else st.cap = '';
  const top = tl.tops.filter((x) => x.at <= tau).pop();
  st.top = top ? top.html : (plan.top || '');
  return st;
}

async function animer(ep) {
  const out = path.join(ROOT, 'videos', `${ep.slug}.mp4`);
  const frames = path.join(CACHE, `frames_${ep.slug}`);
  fs.rmSync(frames, { recursive: true, force: true }); fs.mkdirSync(frames, { recursive: true });
  const plans = ep.plans.map((p) => ({ els: {}, ...p }));
  const num = { n: 0 };
  const tls = plans.map((p, i) => chrono(p, i, ep, num));
  if (process.argv.includes('--script')) return scriptVoix(ep, plans);
  const fontDir = 'file://' + path.join(ROOT, 'fonts');
  const html = `<!doctype html><meta charset="utf-8"><style>${K.CSS(fontDir)}
    body{width:${W}px;height:${H}px;background:${K.C.nuit};overflow:hidden}
    .bl b{color:${K.C.flamme}}
    #top{position:absolute;left:0;top:0;width:${W}px;height:${SY}px;display:flex;flex-direction:column;justify-content:center;padding:70px 40px 10px}
    #tag{position:absolute;left:40px;top:26px;display:flex;align-items:center;gap:10px;font-family:Poppins;font-weight:700;font-size:26px;color:${K.C.creme}}
    .vo,.hk{font-family:Poppins;font-weight:700;color:#fff;line-height:1.05;letter-spacing:-1px}
    .vo{font-size:52px;color:${K.C.soleil}}.hk{font-size:66px}
    #scene{position:absolute;left:0;top:${SY}px;width:${W}px;height:1350px;overflow:hidden}
    #cap{position:absolute;left:30px;width:1020px;top:${SY + 1000}px;height:330px;display:flex;align-items:center;justify-content:center;text-align:center;z-index:20}
    .cap{font-family:Poppins;font-weight:700;font-size:70px;line-height:1.08;letter-spacing:-1px;color:#fff;-webkit-text-stroke:14px ${K.C.nuit};paint-order:stroke fill;text-shadow:7px 7px 0 ${K.C.nuit}}
    .cap.b{color:#D7C8FF}.cap .c{color:${K.C.soleil}}.cap .h{visibility:hidden}
    #bas{position:absolute;left:0;top:${SY + 1350}px;width:${W}px;height:${H - SY - 1350}px;display:flex;align-items:flex-start;justify-content:center;padding-top:26px;font-family:Poppins;font-weight:700;font-size:34px;color:${K.C.creme}}
    </style><body><div id="top"><div id="tag">${K.logo(44)}<span>${ep.serie}</span></div><div id="toptxt"></div></div>
    <div id="scene">${plans.map((p, i) => planHTML(p, i)).join('')}</div><div id="cap"></div><div id="bas">${ep.bas || '@quentinfauchereau'}</div></body>`;
  const tmp = path.join(CACHE, `${ep.slug}.html`);
  fs.writeFileSync(tmp, html);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: 1 });
  await page.goto('file://' + tmp);
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => {
    window.__vis = {}; window.__top = null; window.__plan = -1;
    window.apply = (pi, st) => {
      if (window.__plan !== pi) { document.querySelectorAll('.P').forEach((p) => (p.style.display = 'none')); document.getElementById('p' + pi).style.display = 'block'; window.__plan = pi; }
      document.getElementById('cam' + pi).style.transform = st.cam;
      for (const [cid, c] of Object.entries(st.chars)) {
        const w = document.getElementById(`c${pi}_${cid}`); w.style.transform = c.t;
        if (window.__vis[cid + pi] !== c.v) { if (window.__vis[cid + pi]) document.getElementById(window.__vis[cid + pi]).style.display = 'none'; document.getElementById(c.v).style.display = 'block'; window.__vis[cid + pi] = c.v; }
      }
      for (const [eid, e] of Object.entries(st.els)) { const el = document.getElementById(`e${pi}_${eid}`); el.style.opacity = e.o; el.style.transform = e.t; }
      if (window.__cap !== st.cap) { document.getElementById('cap').innerHTML = st.cap; window.__cap = st.cap; }
      if (window.__top !== st.top) { document.getElementById('toptxt').innerHTML = st.top; window.__top = st.top; }
    };
  });
  let n = 0, offset = 0;
  const audio = [];
  for (const [pi, p] of plans.entries()) {
    const tl = tls[pi];
    tl.audio.forEach((a) => audio.push({ ...a, at: a.at + offset }));
    const nf = Math.round(tl.dur * FPS);
    for (let f = 0; f < nf; f++) {
      await page.evaluate(([pi, st]) => window.apply(pi, st), [pi, etat(p, tl, pi, f / FPS)]);
      await page.screenshot({ path: path.join(frames, `${String(n++).padStart(5, '0')}.jpg`), type: 'jpeg', quality: 88 });
    }
    offset += nf / FPS;
  }
  await browser.close();
  if (ep.musique !== false) {
    const segments = [], muets = []; let o2 = 0;
    plans.forEach((p, i) => {
      const d = Math.round(tls[i].dur * FPS) / FPS;
      if (p.musique !== false && p.musique !== 'silence') segments.push({ a: o2, b: o2 + d, style: p.musique || 'rebond' });
      tls[i].blancs.forEach(([x, y]) => muets.push([o2 + x, o2 + y]));
      o2 += d;
    });
    const mf = path.join(CACHE, `${ep.slug}_musique.wav`);
    ecrireWav(mf, musique(offset, { segments, muets }));
    audio.push({ file: mf, at: 0, vol: 1, bus: 'mus' });
  }
  const mix = path.join(CACHE, `${ep.slug}_mix.wav`);
  const args = ['-y', '-loglevel', 'error'];
  audio.forEach((a) => args.push('-i', a.file));
  const parts = audio.map((a, i) => `[${i}]volume=${a.vol},adelay=${Math.round(a.at * 1000)}|${Math.round(a.at * 1000)},apad=whole_dur=${offset.toFixed(2)}[a${i}]`);
  const bus = (nom) => { const ids = audio.map((a, i) => (a.bus === nom ? `[a${i}]` : '')).join(''); const n = (ids.match(/\[/g) || []).length; return n ? `${ids}amix=inputs=${n}:normalize=0:dropout_transition=0` : `anullsrc=r=44100:cl=mono,atrim=0:${offset.toFixed(2)}`; };
  const f = parts.join(';') +
    `;${bus('dlg')}[dlg0];[dlg0]asplit=2[dlg][sc]` +
    `;${bus('sfx')},lowpass=f=6000,volume=0.55[sfx]` +
    `;${bus('mus')},volume=0.55[mus0];[mus0][sc]sidechaincompress=threshold=0.015:ratio=8:attack=20:release=400[mus]` +
    `;[dlg][sfx][mus]amix=inputs=3:normalize=0,atrim=0:${offset.toFixed(2)},loudnorm=I=-16:TP=-1.5:LRA=11[out]`;
  run('ffmpeg', [...args, '-filter_complex', f, '-map', '[out]', '-ar', '44100', mix]);
  run('ffmpeg', ['-y', '-loglevel', 'error', '-framerate', String(FPS), '-i', path.join(frames, '%05d.jpg'), '-i', mix,
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '21', '-preset', 'medium', '-c:a', 'aac', '-b:a', '160k', '-shortest', '-movflags', '+faststart', out]);
  console.log(`${path.relative(ROOT, out)} · ${offset.toFixed(1)} s · ${n} images · ${audio.length} pistes audio`);
  return { out, frames, dur: offset };
}

// Fiche d'enregistrement : une ligne par réplique, numérotée comme les fichiers attendus.
function scriptVoix(ep, plans) {
  let n = 0;
  const NOMS = { q: 'Quentin', b: 'Brutus', e: 'Invité' };
  const lignes = [];
  plans.forEach((p) => (p.beats || []).forEach((b) => { if (b.say) lignes.push(`| **${String(++n).padStart(2, '0')}** | ${NOMS[b.voice || b.who] || b.who} | ${b.say.replace(/<[^>]+>/g, '')} | ${b.jeu || ''} |`); }));
  const dir = path.join(ROOT, 'voix', ep.slug);
  fs.mkdirSync(dir, { recursive: true });
  const md = `# Répliques à enregistrer — ${ep.serie}\n\n` +
    `Un fichier par réplique, nommé par son numéro : \`01.m4a\`, \`02.m4a\`… (mémo vocal du téléphone, m4a, mp3 ou wav).\n` +
    `Pièce calme, téléphone à 20 cm, une seconde de silence avant de parler. **Joue trop** : à l'écran, ça paraîtra juste.\n` +
    `Brutus : fais-le avec ta voix normale, en moqueur ; je la monte dans les aigus.\n\n| N° | Qui | Réplique | Comment la jouer |\n|---|---|---|---|\n${lignes.join('\n')}\n`;
  fs.writeFileSync(path.join(dir, 'SCRIPT.md'), md);
  console.log(path.relative(ROOT, path.join(dir, 'SCRIPT.md')));
  return { script: true };
}

module.exports = { animer, K };
