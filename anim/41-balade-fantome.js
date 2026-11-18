// Dessin animé — Crash-test n°1 « La balade fantôme » (Reel 1080 x 1920, ~1 min).
const { animer, K } = require('./moteur.js');
const { C, G, S, bulle, tq, tb, fleche, ono, narr, actions } = K;
const I = G.I, st = G.st;

// --- décors et accessoires (repris de l'épisode 41) ---
const ferme = `<g transform="translate(0 -40)"><rect x="-120" y="-62" width="240" height="124" rx="10" fill="#fff" ${st(7)}/><rect x="-106" y="-48" width="212" height="96" rx="6" fill="#E5322D"/><text y="-4" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="36" fill="#fff">FERMÉ</text><text y="32" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="21" fill="#fff">(pour toujours)</text></g>`;
const dos = (w = 1160, y = 820) => `<rect x="-40" y="${y}" width="${w}" height="300" rx="60" fill="#3E6FB5" ${st(8)}/>`;
const assise = (w = 1160, y = 1080) => `<rect x="-40" y="${y}" width="${w}" height="300" rx="40" fill="#2F5A99" ${st(8)}/><rect x="-60" y="${y - 160}" width="110" height="440" rx="50" fill="#3E6FB5" ${st(8)}/>`;
const chip = (x, y, r) => `<ellipse cx="${x}" cy="${y}" rx="18" ry="12" fill="#F2B544" transform="rotate(${r} ${x} ${y})" ${st(4)}/>`;
const AG = (inner) => S(`<g transform="translate(80 330) scale(1.6) rotate(2)">${inner}</g>`);
const ligne = (i, t, c = C.grisNuit, fs = 28) => AG(`<text x="30" y="${162 + i * 46}" font-family="Poppins" font-weight="700" font-size="${fs}" fill="${c}">${t}</text>`);
const agendaBase = AG(`<rect width="570" height="330" rx="12" fill="#fff" ${st(7)}/><rect width="570" height="62" rx="12" fill="#E5322D" ${st(7)}/>
  <text x="285" y="44" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="34" fill="#fff">AGENDA</text>
  <text x="30" y="112" font-family="Poppins" font-weight="700" font-size="30" fill="${I}">Lancer les balades</text>`);
const phone = `<div class="abs" style="left:600px;top:140px;width:400px;height:450px;transform:rotate(4deg);background:${I};border-radius:48px;padding:20px;box-shadow:12px 12px 0 rgba(20,18,31,.35)">
  <div style="width:100%;height:100%;background:#EAF3FF;border-radius:32px;padding:28px 24px;font-family:Poppins;font-weight:700;color:${I}">
    <div style="font-size:24px;color:${C.grisNuit};margin-bottom:18px">Nouveau message</div>
    <div style="background:#fff;border:5px solid ${I};border-radius:26px;padding:20px 22px;font-size:36px;line-height:1.16">Depuis la balade, j’ai l’esprit plus clair. Merci.</div></div></div>`;
const machine = `<defs><clipPath id="loupe"><circle cx="790" cy="900" r="230"/></clipPath><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 H 0 V 40" fill="none" stroke="#7FD4FF" stroke-width="1.5" opacity=".35"/></pattern></defs>
  <path d="M 280 1010 L 580 820 M 290 1080 L 620 1080" stroke="#7FD4FF" stroke-width="6" stroke-dasharray="14 12"/>
  <circle cx="228" cy="1020" r="72" fill="#7FD4FF" opacity=".3" stroke="#7FD4FF" stroke-width="8"/>
  <g clip-path="url(#loupe)"><rect x="540" y="660" width="500" height="480" fill="#12304F"/><rect x="540" y="660" width="500" height="480" fill="url(#grid)"/>
    <rect x="590" y="980" width="410" height="150" rx="14" fill="#5B5675" ${st(7)}/><circle cx="650" cy="1050" r="30" fill="#EAF3FF" ${st(5)}/><path d="M 650 1050 L 672 1030" ${st(5)}/>
    <rect x="626" y="1066" width="290" height="48" rx="8" fill="${C.soleil}" ${st(5)}/><text x="771" y="1099" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="25" fill="${I}">INCONNU = TIGRE</text></g>
  <circle cx="790" cy="900" r="230" fill="none" stroke="#7FD4FF" stroke-width="12"/>`;
const hk = (t) => `<div class="hk">${t}</div>`;

const QA = { x: 40, y: 640, s: 0.7 }, BA = { x: 470, y: 520, s: 1.08 };
const Q = { x: 40, y: 500 }, B2 = { x: 560, y: 720 }, B = { x: 670, y: 720 };
const QS = { x: 40, y: 560 }, BS = { x: 400, y: 760 }, BF = { x: 660, y: 800 };
const QH = { x: 640, y: 600 }, BH = { x: 380, y: 690, s: 0.6 };

module.exports = animer({
  slug: '41-balade-fantome',
  serie: 'Crash-test · n°1',
  plans: [
    // A — L'accroche
    {
      top: hk('Ce singe m’a fait perdre 6 mois.'),
      bg: G.salon({ etagere: false }) + S(dos(1160, 840)),
      chars: {
        q: { kind: 'q', o: { ...QA, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.55 } } },
        b: { kind: 'b', o: { ...BA, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: 10, py: 4 }, brows: 'sly' }, poses: { regard: { eyes: { px: -16, py: 14 }, brows: 'up', mouth: 'o' } } },
      },
      front: S(`${G.toile(40, 640, 130)}${G.toile(290, 900, 70, -1, 1)}${assise(1160, 1120)}${chip(420, 1150, 20)}${chip(480, 1170, -30)}${chip(980, 1140, 40)}`),
      els: {
        lui: { html: fleche('LUI.', { x: 800, y: 360, tx: 760, ty: 545 }), o: [820, 420] },
        moi: { html: fleche('MOI.', { x: 60, y: 430, tx: 160, ty: 640, size: 44 }), o: [100, 470] },
        crunch: { html: ono('CRUNCH', { x: 560, y: 1000, size: 80, rot: 6, fill: C.flamme }), o: [700, 1040], anim: 'ono' },
      },
      beats: [
        { show: 'lui', sfx: 'pop', wait: 0.45 },
        { show: 'moi', sfx: 'pop', wait: 0.3 },
        { who: 'q', vo: true, say: 'Ce singe m’a fait perdre six mois.', top: undefined },
        { hide: ['lui', 'moi'], pose: { b: 'regard' }, act: { b: 'saut' }, sfx: 'boing', cam: { s: 1.3, cx: 664, cy: 700, d: 0.25 }, who: 'b', say: 'Quoi ?', bubble: { x: 380, yb: 470, w: 220, size: 52, to: [600, 560] } },
        { show: 'crunch', sfx: 'crunch', act: { b: 'ecrase' }, wait: 0.8 },
      ],
    },
    // B — La balade, et Brutus qui débarque
    {
      top: hk('J’ai créé une balade pour débloquer les gens.'),
      bg: G.saleve2({ panneau: 'DÉCLIC', panneauX: 860 }),
      chars: {
        q: { kind: 'q', o: { ...Q, arms: { l: 'hip', r: 'raise' }, mouth: 'grin', eyes: { px: 8 } }, poses: { doute: { arms: { l: 'hip', r: 'chin' }, brows: 'sad', mouth: 'smirk', eyes: { px: 12 } } } },
        b: { kind: 'b', o: { ...B2, arms: 'hold', hold: ferme, brows: 'angry', mouth: 'flat', eyes: { px: -8, lid: 0.3 }, casque: true } },
      },
      front: G.avantPlan(),
      beats: [
        { who: 'q', say: 'J’ai créé une balade pour débloquer les gens !', bubble: { x: 40, yb: 430, w: 560, to: tq(Q) } },
        { clear: true, act: { b: 'entre' }, sfx: 'whoosh', wait: 0.7 },
        { who: 'b', sfx: 'tic', say: 'Sentier fermé.', bubble: { x: 600, yb: 640, w: 330, to: tb(B2) } },
        { who: 'b', say: 'Je protège les gens.', bubble: { x: 540, yb: 640, w: 430, to: tb(B2) } },
        { pre: 0.25, pose: { q: 'doute' }, cam: { s: 1.3, cx: 693, cy: 820, d: 0.2 }, sfx: 'tic', who: 'b', say: 'De toi.', bubble: { x: 590, yb: 640, w: 280, size: 60, to: tb(B2) } },
      ],
      tail: 0.7,
    },
    // C — Le dossier RISQUES
    {
      top: hk('Brutus : mon garde du corps intérieur. Parano.'),
      bg: G.saleve2(),
      chars: {
        q: { kind: 'q', o: { ...Q, arms: { l: 'hip', r: 'point' }, brows: 'flat', mouth: 'smirk', eyes: { px: 8, lid: 0.25 } }, poses: { plat: { arms: 'down', mouth: 'flat', eyes: { px: 14, lid: 0.45 } } } },
        b: { kind: 'b', o: { ...B, arms: 'hold', hold: G.P.classeur, brows: 'sad', mouth: 'flat', eyes: { px: -6, py: -8 }, casque: true }, poses: { panique: { brows: 'up', eyes: { mode: 'wide' }, talk: 'scream', sweat: true } } },
      },
      front: G.avantPlan(),
      beats: [
        { who: 'b', sfx: 'tic', say: 'Risque numéro un : il pleut.', bubble: { x: 420, yb: 330, w: 610, to: tb(B, 0, -10) } },
        { pose: { b: 'panique' }, act: { b: 'saut' }, sfx: 'boing', who: 'b', say: 'Risque numéro deux : des gens viennent !', tts: 'Risque numéro deux ! Des gens viennent !', bubble: { x: 360, yb: 330, w: 670, to: tb(B, 0, -10) } },
        { pose: { q: 'plat' }, cam: { s: 1.35, cx: 204, cy: 700, d: 0.2 }, who: 'q', say: 'C’est le but, Brutus.', bubble: { x: 40, yb: 462, w: 330, to: tq(Q) } },
      ],
      tail: 0.8,
    },
    // D — L'écureuil
    {
      top: hk('Il a tout prévu.'),
      bg: G.saleve2(),
      chars: {
        q: { kind: 'q', o: { ...Q, arms: 'down', mouth: 'smile', eyes: { px: 10, py: 10 } } },
        b: { kind: 'b', o: { ...B, arms: 'hold', hold: G.P.carte, brows: 'angry', mouth: 'flat', eyes: { px: -14, py: 6 }, casque: true, sirene: true, sweat: true }, poses: { louche: { eyes: { px: -16, py: 10, lid: 0.5 }, brows: 'sly' } } },
      },
      front: G.avantPlan(),
      els: {
        wiiiou: { html: ono('WIIIOU&nbsp;!', { x: 760, y: 600, size: 62, rot: 8, fill: '#E5322D' }), o: [880, 630], anim: 'ono' },
        ecureuil: { html: S(G.ecureuil(440, 1030, 1.15, true)), o: [520, 1100] },
      },
      beats: [
        { show: 'wiiiou', sfx: 'sirene', act: { b: 'tremble' }, wait: 0.5 },
        { who: 'b', say: 'J’ai repéré quatorze dangers.', bubble: { x: 330, yb: 280, w: 700, to: tb(B, 40, -80) } },
        { show: 'ecureuil', sfx: 'pop', who: 'b', say: 'Dont un écureuil.', bubble: { x: 430, yb: 280, w: 480, to: tb(B, 40, -80) } },
        { who: 'q', say: 'Il a l’air sympa.', bubble: { x: 40, yb: 440, w: 340, to: tq(Q) } },
        { pose: { b: 'louche' }, who: 'b', say: 'C’est ce qu’il veut que tu croies.', bubble: { x: 430, yb: 560, w: 470, size: 40, to: tb(B, -40, -40) } },
        { cam: { s: 1.7, cx: 520, cy: 1090, d: 0.35 }, sfx: 'ding', wait: 1.0 },
      ],
    },
    // E1 — Le report
    {
      top: hk('Alors j’ai repoussé.'),
      bg: G.salon({ etagere: false }) + `<div class="abs" style="inset:0;background:rgba(20,18,31,.35)"></div>` + agendaBase,
      chars: { b: { kind: 'b', o: { x: 790, y: 930, s: 0.52, arms: 'hip', mouth: 'smirk', eyes: { px: -14, py: -12 }, brows: 'sly' } } },
      els: {
        trait: { html: AG(`<path d="M 24 102 L 330 98" stroke="#E5322D" stroke-width="7" stroke-linecap="round"/>`), o: [118, 490], anim: 'trait' },
        l1: { html: ligne(0, '→ au printemps'), o: [150, 590] },
        l2: { html: ligne(1, '→ après l’été'), o: [150, 665] },
        l3: { html: ligne(2, '→ quand Mercure ne sera plus rétrograde', C.grisNuit, 23), o: [150, 740] },
        l4: { html: ligne(3, '→ quand ce sera clair', C.flamme), o: [150, 815] },
      },
      beats: [
        { who: 'q', vo: true, say: 'Alors j’ai repoussé.', show: 'trait', sfx: 'whoosh' },
        { show: 'l1', sfx: 'tic', who: 'q', vo: true, say: 'Au printemps.' },
        { show: 'l2', sfx: 'tic', who: 'q', vo: true, say: 'Après l’été.' },
        { show: 'l3', sfx: 'tic', who: 'b', say: 'Quand Mercure ne sera plus rétrograde.', bubble: { x: 380, yb: 900, w: 600, size: 38, to: tb({ x: 790, y: 930, s: 0.52 }) } },
        { show: 'l4', sfx: 'tic', who: 'q', vo: true, say: 'Quand ce sera clair.' },
      ],
      tail: 0.6,
    },
    // E2 — Jour 183
    {
      top: hk('Six mois de report.'),
      bg: G.salon({ etagere: false }) + S(dos(840)),
      chars: {
        q: { kind: 'q', o: { ...QS, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.5 } } },
        b: { kind: 'b', o: { ...BS, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } } },
      },
      front: S(`${assise(840)}${chip(300, 1110, 20)}${chip(360, 1130, -30)}`),
      els: {
        jour: { html: narr('Jour 183.', { x: 640, y: 120, w: 260, size: 46, bg: C.nuit, color: C.creme, rot: -3 }), o: [770, 160] },
        toile1: { html: S(G.toile(40, 560, 150)), o: [40, 560], anim: 'pousse', d: 2.6 },
        toile2: { html: S(G.toile(800, 820, 110, -1, 1)), o: [800, 820], anim: 'pousse', d: 2.6 },
        points: { html: bulle({ x: 60, yb: 520, w: 150, size: 54, to: tq(QS), text: '…' }), o: [135, 470] },
      },
      beats: [
        { show: ['jour', 'toile1', 'toile2'], sfx: 'tic', wait: 0.6 },
        { who: 'b', say: 'On est bien, là.', bubble: { x: 470, yb: 700, w: 330, to: tb(BS) } },
        { show: 'points', wait: 1.4 },
      ],
      tail: 0.2,
    },
    // F — BZZZ
    {
      top: hk('Et puis, un jour…'),
      bg: G.salon({ etagere: false }) + S(dos()),
      chars: {
        q: { kind: 'q', o: { ...QS, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.5 } }, poses: { choc: { arms: 'up', brows: 'up', mouth: 'open', eyes: { mode: 'wide' } } } },
        b: { kind: 'b', o: { ...BF, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } }, poses: { colere: { arms: 'up', hold: '', brows: 'angry', mouth: 'scream', eyes: { mode: 'wide' }, talk: 'scream' } } },
      },
      front: S(`<rect x="-40" y="1080" width="1160" height="300" rx="40" fill="#2F5A99" ${st(8)}/>`),
      els: {
        phone: { html: phone, o: [800, 360], anim: 'glisse' },
        bzzz: { html: ono('BZZZ', { x: 470, y: 120, size: 90, rot: -14 }), o: [560, 170], anim: 'ono' },
        crunch: { html: ono('CRUNCH', { x: 600, y: 1130, size: 72, rot: 6, fill: C.flamme }), o: [720, 1170], anim: 'ono' },
        miettes: { html: S(`${chip(700, 790, 20)}${chip(980, 760, -30)}${chip(1010, 860, 50)}${chip(640, 880, -10)}${chip(860, 740, 70)}`), o: [820, 820], anim: 'pop' },
      },
      beats: [
        { wait: 0.4 },
        { show: ['phone', 'bzzz'], sfx: 'buzz', act: { q: 'tremble' }, wait: 1.1 },
        { pose: { q: 'choc' }, act: { q: 'saut' }, sfx: 'boing', who: 'q', say: 'Attends… Elle a eu lieu, la balade ?', bubble: { x: 40, yb: 480, w: 460, to: tq(QS) } },
        { pose: { b: 'colere' }, show: ['crunch', 'miettes'], sfx: 'crunch', act: { b: 'saut' }, who: 'b', say: 'Qui a laissé faire ça ?!', bubble: { x: 590, yb: 760, w: 430, to: tb(BF) } },
      ],
      tail: 0.7,
    },
    // G — Le radar du corps (le fond)
    {
      top: hk('Ce qui se passe vraiment :'),
      drift: 0,
      bg: G.bgDark(C.nuit, 'rgba(127,212,255,.18)') + S(machine),
      chars: {
        q: { kind: 'q', o: { x: 60, y: 570, arms: { l: 'down', r: 'chest' }, eyes: { mode: 'closed' }, mouth: 'smile' } },
        m: { kind: 'b', o: { x: 700, y: 820, s: 0.3, arms: 'up', casque: true, sweat: true, mouth: 'scream', eyes: { mode: 'wide' }, brows: 'up' }, poses: { calme: { arms: 'down', mouth: 'smile', eyes: { mode: 'closed' }, brows: 'normal', sweat: false } } },
      },
      els: { tigre: { html: S(G.fx.tigre(900, 360, 1)), o: [900, 360] } },
      beats: [
        { sfx: 'accord', act: { m: 'tremble' }, wait: 0.6 },
        { cam: { s: 1.12, cx: 640, cy: 800, d: 2 }, who: 'q', vo: true, say: 'Brutus ne veut pas que j’échoue.' },
        { who: 'q', vo: true, say: 'Il veut que rien ne change.' },
        { show: 'tigre', sfx: 'pop', who: 'q', vo: true, say: 'Pour lui, l’inconnu, c’est un tigre.' },
        { who: 'q', vo: true, say: 'Alors je respire.' },
        { sfx: 'souffle', wait: 1.5 },
        { pose: { m: 'calme' }, sfx: 'ding', top: hk('Brutus redescend.'), wait: 1.2 },
      ],
    },
    // H — Le défi
    {
      top: hk('Ton défi'),
      bg: G.saleve2({ mood: 'or' }),
      chars: {
        q: { kind: 'q', o: { ...QH, flip: true, arms: 'phone', mouth: 'smirk', eyes: { px: 0, py: 14 } }, poses: { face: { eyes: { px: 14, py: 0 }, mouth: 'smirk', brows: 'sly' } } },
        b: { kind: 'b', o: { ...BH, arms: 'hip', brows: 'sad', mouth: 'wobble', eyes: { px: 12, py: 14 }, sweat: true } },
      },
      front: G.avantPlan(),
      els: {
        panneau: { html: actions({ y: 120, mot: 'ENVOYÉ', pourquoi: 'quand tu as envoyé le message que tu repousses depuis des semaines', envoie: 'l’ami qui repousse tout « au printemps »', enregistre: 'pour ton prochain report' }), o: [540, 300], anim: 'glisse' },
      },
      beats: [
        { who: 'q', say: 'Envoie aujourd’hui le message que tu repousses.', bubble: { x: 40, yb: 540, w: 600, to: tq(QH) } },
        { act: { b: 'tremble' }, who: 'b', say: 'J’ai ajouté : désolé du dérangement.', bubble: { x: 30, yb: 640, w: 420, size: 36, to: tb(BH) } },
        { clear: true, pose: { q: 'face' }, show: 'panneau', sfx: 'ding', who: 'q', vo: true, say: 'Et écris envoyé en commentaire.', tts: 'Et écris, envoyé, en commentaire.' },
        { top: hk('Commente ENVOYÉ ↓'), wait: 1.8 },
      ],
    },
  ],
});
