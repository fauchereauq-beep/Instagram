// Brutus · Épisode 1 — « Le bouton » (Reel 1080 x 1920, ~27 s).
// Trame : accroche (0-2 s) · conflit + réplique culte (2-7) · escalade en 3 (7-11) · ellipse (11-14)
//         · retournement « mais c'est moi ça » (14-18) · le fond, musique coupée (18-23) · victoire + rechute qui boucle (23-27).
const { animer, K } = require('./moteur.js');
const { C, G, S } = K;
const I = G.I, st = G.st;

const hk = (t, fs = 64) => `<div class="hk" style="font-size:${fs}px">${t}</div>`;
const bureauFond = G.salon({ etagere: false, panama: false });
const bureauDevant = S(`<rect x="300" y="935" width="800" height="430" fill="#A86B3C" ${st(8)}/><rect x="290" y="915" width="820" height="40" rx="8" fill="#C98E5A" ${st(7)}/><path d="M 300 990 H 1100" stroke="${I}" stroke-width="4" opacity=".25"/>`);
const ecran = (txt, bg) => `<rect x="-118" y="-160" width="236" height="104" rx="22" fill="${bg}" ${st(5)}/><text y="-94" text-anchor="middle" font-family="Poppins" font-weight="700" font-size="38" fill="#fff">${txt}</text>`;
const ordiOuvert = (txt = 'PUBLIER', bg = '#E5322D') => S(G.fx.laptop(690, 905, 1.2, ecran(txt, bg)));
const ordiFerme = S(`<rect x="460" y="880" width="460" height="34" rx="10" fill="#9C98AE" ${st(6)}/><path d="M 490 892 H 880" stroke="#fff" stroke-width="5" opacity=".5"/>`);
const carte = (t, rot = -3) => `<div class="abs" style="left:110px;top:120px;width:860px;padding:34px 36px;background:#fff;border:9px solid ${I};border-radius:26px;box-shadow:14px 14px 0 ${I};transform:rotate(${rot}deg);font-family:Poppins;font-weight:700;font-size:74px;line-height:1.04;text-align:center;color:${I}">${t}</div>`;
const confettis = S(Array.from({ length: 46 }, (_, i) => { const x = (i * 211) % 1040 + 20, y = (i * 97) % 520 + 60, c = [C.flamme, C.soleil, '#7FD4FF', '#FF8FB1', C.jungle][i % 5]; return i % 2 ? `<rect x="${x}" y="${y}" width="22" height="12" rx="3" fill="${c}" transform="rotate(${i * 37} ${x} ${y})"/>` : `<circle cx="${x}" cy="${y}" r="9" fill="${c}"/>`; }).join(''));
const notif = `<div class="abs" style="left:150px;top:110px;width:780px;background:#fff;border:8px solid ${I};border-radius:34px;box-shadow:14px 14px 0 ${I};padding:26px 32px;font-family:Poppins;font-weight:700;color:${I}">
  <div style="font-size:30px;color:${C.grisNuit}">Notification · à l’instant</div>
  <div style="font-size:54px;line-height:1.08;margin-top:8px">Quelqu’un vient de lancer <span style="color:${C.flamme}">TON idée.</span></div>
  <div style="font-size:40px;margin-top:12px;color:#E5322D">♥ 2 431</div></div>`;
const canape = { dos: S(`<rect x="-40" y="820" width="1160" height="300" rx="60" fill="#3E6FB5" ${st(8)}/>`), assise: S(`<rect x="-40" y="1080" width="1160" height="300" rx="40" fill="#2F5A99" ${st(8)}/>`) };

const Q = { x: 170, y: 380, s: 0.95 };
const qPoses = {
  choc: { arms: 'up', mouth: 'open', eyes: { mode: 'wide' }, brows: 'up' },
  doute: { arms: { l: 'hip', r: 'chin' }, mouth: 'smirk', eyes: { px: 14, py: -4 }, brows: 'sad' },
  convaincu: { arms: { l: 'down', r: 'chin' }, mouth: 'flat', eyes: { px: 14, lid: 0.45 }, brows: 'flat' },
};
const BD = { x: 740, y: 480, s: 0.8 };

module.exports = animer({
  slug: 'ep01-le-bouton',
  serie: 'Brutus · Épisode 1',
  bas: '@quentinfauchereau',
  plans: [
    // 1 — Accroche : le doigt au-dessus du bouton… et Brutus qui plonge.
    {
      top: hk('Moi, à 1 clic de lancer mon projet :'),
      bg: bureauFond,
      chars: {
        q: { kind: 'q', o: { ...Q, arms: { l: 'down', r: 'point' }, mouth: 'smile', eyes: { px: 12, py: 8 } }, poses: qPoses },
        b: { kind: 'b', o: { ...BD, arms: 'up', mouth: 'scream', eyes: { mode: 'wide' }, brows: 'angry', casque: true }, talk: 'scream', z: 3 },
      },
      front: bureauDevant,
      els: { ouvert: { html: ordiOuvert(), z: 0, always: true }, ferme: { html: ordiFerme, z: 0 } },
      beats: [
        { cam: { s: 1.18, cx: 640, cy: 760, d: 0.9 }, wait: 0.9 },
        { act: { b: 'entre' }, sfx: 'whoosh', wait: 0.32 },
        { hide: 'ouvert', show: 'ferme', sfx: 'crash', act: { b: 'ecrase', q: 'saut', x: 'secousse' }, pose: { q: 'choc' }, cam: { s: 1, cx: 540, cy: 675, d: 0.12 }, who: 'b', say: 'NON !', gap: 0.45 },
      ],
      tail: 0.2,
    },
    // 2 — Le conflit et la réplique culte.
    {
      top: hk('Brutus, mon chimpanzé intérieur.', 54),
      bg: bureauFond,
      chars: {
        q: { kind: 'q', o: { ...Q, ...qPoses.doute }, poses: qPoses },
        b: { kind: 'b', o: { ...BD, arms: 'hip', mouth: 'smirk', eyes: { px: -12, py: 6, lid: 0.3 }, brows: 'sly', casque: true }, poses: { camera: { eyes: { px: 0, py: 10, lid: 0.35 }, mouth: 'smirk', brows: 'sly' } }, talk: 'open', z: 3 },
      },
      front: bureauDevant,
      els: { ferme: { html: ordiFerme, z: 0, always: true } },
      beats: [
        { cam: { s: 1.15, cx: 640, cy: 700, d: 0.01 }, who: 'b', say: 'Et si c’est nul ?', gap: 0.35 },
        { who: 'q', say: 'Et si c’est bien ?', gap: 0.4 },
        { pre: 0.2, pose: { b: 'camera' }, cam: { s: 1.55, cx: 880, cy: 600, d: 0.18 }, sfx: 'dramatique', who: 'b', say: 'On prend pas ce risque.', gap: 0.7 },
      ],
      tail: 0.1,
    },
    // 3 — L'escalade : trois excuses, trois cartons.
    {
      top: hk('Ses arguments :'),
      bg: G.bgRays('#7B5EA7', '#8C70BA', 540, 900),
      drift: 0,
      chars: {
        q: { kind: 'q', o: { x: 20, y: 640, s: 0.72, ...qPoses.doute }, poses: qPoses },
        b: { kind: 'b', o: { x: 600, y: 650, s: 0.82, arms: { l: 'hip', r: 'point' }, mouth: 'smirk', eyes: { px: -10, py: -14 }, brows: 'sly', casque: true }, flip: false },
      },
      els: {
        c1: { html: carte('Il faut un meilleur logo.'), o: [540, 260] },
        c2: { html: carte('Attends lundi.', 2), o: [540, 260] },
        c3: { html: carte('Mercure est rétrograde.', -2), o: [540, 260] },
      },
      beats: [
        { show: 'c1', sfx: 'tic', cam: { s: 1.06, d: 0.1 }, who: 'b', say: 'Il faut un meilleur logo.', cap: false, gap: 0.3 },
        { hide: 'c1', show: 'c2', sfx: 'tic', cam: { s: 1, d: 0.1 }, pose: { q: 'convaincu' }, who: 'b', say: 'Attends lundi.', cap: false, gap: 0.3 },
        { hide: 'c2', show: 'c3', sfx: 'tic', cam: { s: 1.1, d: 0.1 }, act: { q: 'ecrase' }, who: 'b', say: 'Mercure est rétrograde.', cap: false, gap: 0.45 },
      ],
      tail: 0.1,
    },
    // 4a — Ellipse.
    {
      top: '',
      bg: G.bgRays(C.soleil, '#FFD45E', 540, 675) + `<div class="abs" style="left:0;right:0;top:470px;text-align:center;font-family:Poppins;font-weight:700;font-size:120px;line-height:1;color:#fff;-webkit-text-stroke:16px ${I};paint-order:stroke fill;text-shadow:10px 10px 0 ${I}">6 MOIS<br>PLUS TARD</div>`,
      drift: 0.06,
      beats: [{ sfx: 'tictac', wait: 1.0 }],
      tail: 0,
    },
    // 4b — Le canapé.
    {
      top: hk('Jour 183.'),
      bg: G.salon({ etagere: false, panama: false }) + canape.dos,
      chars: {
        q: { kind: 'q', o: { x: 40, y: 560, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.55 } } },
        b: { kind: 'b', o: { x: 560, y: 760, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } } },
      },
      front: canape.assise,
      els: { t1: { html: S(G.toile(40, 560, 150)), o: [40, 560], anim: 'pousse', d: 1.8 }, t2: { html: S(G.toile(1040, 820, 120, -1, 1)), o: [1040, 820], anim: 'pousse', d: 1.8 } },
      beats: [
        { show: ['t1', 't2'], wait: 0.3 },
        { sfx: [['crunch', 0.1]], who: 'b', say: 'On est bien, là.', gap: 0.6 },
      ],
      tail: 0,
    },
    // 5 — Le retournement : « mais c'est moi ça ».
    {
      top: hk('Et puis, un matin…'),
      bg: G.salon({ etagere: false, panama: false }) + canape.dos,
      chars: {
        q: { kind: 'q', o: { x: 40, y: 560, outfit: 'chemise', arms: 'down', brows: 'flat', mouth: 'flat', eyes: { lid: 0.55 } }, poses: { choc: { arms: 'up', mouth: 'open', eyes: { mode: 'wide' }, brows: 'up' }, colere: { arms: { l: 'hip', r: 'point' }, mouth: 'frown', eyes: { px: 18, py: 8 }, brows: 'angry' } } },
        b: { kind: 'b', o: { x: 560, y: 760, plaid: true, arms: 'hold', hold: G.P.chips, mouth: 'munch', eyes: { lid: 0.45, px: -4 } }, poses: { gloups: { eyes: { px: -16, py: -6 }, mouth: 'o', brows: 'up', sweat: true } } },
      },
      front: canape.assise,
      els: { notif: { html: notif, o: [540, 280], anim: 'glisse', z: 4 } },
      beats: [
        { wait: 0.25 },
        { show: 'notif', sfx: 'buzz', act: { q: 'tremble' }, wait: 1.0 },
        { pose: { q: 'choc' }, act: { q: 'saut' }, sfx: 'boing', wait: 0.45 },
        { pose: { b: 'gloups' }, sfx: 'gloups', cam: { s: 1.35, cx: 760, cy: 900, d: 0.2 }, who: 'b', say: 'Ah. Lui, il a osé.', gap: 0.3 },
        { pose: { q: 'colere' }, cam: { s: 1, cx: 540, cy: 675, d: 0.15 }, act: { x: 'secousse' }, wait: 0.55 },
      ],
      tail: 0,
    },
    // 6 — Le fond (musique coupée) : il tient Brutus dans ses mains.
    {
      musique: false,
      top: hk('Ce que j’ai compris :'),
      bg: G.bgDark(C.nuit, 'rgba(255,194,51,.22)'),
      drift: 0.08,
      chars: {
        q: { kind: 'q', o: { x: 260, y: 260, s: 1.05, arms: 'hold', mouth: 'smile', eyes: { px: 0, py: 18 }, brows: 'sad' } },
        m: { kind: 'b', o: { x: 389, y: 674, s: 0.45, plaid: true, arms: 'down', mouth: 'wobble', eyes: { mode: 'wide' }, brows: 'up', sweat: true }, poses: { calme: { mouth: 'smile', eyes: { mode: 'closed' }, brows: 'normal', sweat: false } }, z: 3 },
      },
      beats: [
        { sfx: 'accord', act: { m: 'tremble' }, cam: { s: 1.22, cx: 470, cy: 640, d: 1.2 }, wait: 0.5 },
        { act: { m: 'tremble' }, who: 'q', say: 'Il ne veut pas que j’échoue.', gap: 0.35 },
        { act: { m: 'tremble' }, who: 'q', say: 'Il veut juste que rien ne change.', gap: 0.3 },
        { sfx: 'souffle', pose: { m: 'calme' }, wait: 1.2 },
      ],
      tail: 0,
    },
    // 7 — Victoire… et rechute (la fin renvoie au début : la vidéo boucle).
    {
      top: hk('Commente LANCÉ si tu cliques aujourd’hui ↓', 52),
      bg: bureauFond,
      chars: {
        q: { kind: 'q', o: { ...Q, arms: { l: 'down', r: 'point' }, mouth: 'smile', eyes: { px: 12, py: 8 } }, poses: { joie: { arms: 'up', mouth: 'grin', eyes: { mode: 'happy' }, brows: 'up' }, fige: { arms: 'up', mouth: 'flat', eyes: { px: 18, py: 0 }, brows: 'flat' } } },
        b: { kind: 'b', o: { x: 890, y: 650, s: 0.5, plaid: true, arms: 'down', mouth: 'flat', eyes: { lid: 0.5, px: -10 }, brows: 'flat' }, poses: { doute: { eyes: { px: -14, py: -4, lid: 0.25 }, mouth: 'smirk', brows: 'sly' } }, z: 3 },
      },
      front: bureauDevant,
      els: { ouvert: { html: ordiOuvert(), z: 0, always: true }, publie: { html: ordiOuvert('PUBLIÉ ✓', C.jungle), z: 0 }, confettis: { html: confettis, o: [540, 300] } },
      beats: [
        { wait: 0.35 },
        { hide: 'ouvert', show: ['publie', 'confettis'], sfx: 'victoire', pose: { q: 'joie' }, act: { q: 'saut' }, wait: 1.0 },
        { pose: { b: 'doute', q: 'fige' }, cam: { s: 1.5, cx: 970, cy: 740, d: 0.2 }, who: 'b', say: 'Attends… et si c’est nul ?', gap: 0.15 },
        { sfx: 'dramatique', top: hk('Épisode 2 : Brutus lit les commentaires.', 50), wait: 0.9 },
      ],
      tail: 0,
    },
  ],
});
