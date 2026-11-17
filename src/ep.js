// Raccourcis communs aux épisodes en style gros nez.
const K = require('./kit.js');
const G = require('./gn.js');
K.useStyle('pop');
const { C } = K;
const nb = '&nbsp;';
const fl = (t) => `<span style="color:${C.flamme}">${t}</span>`;
const so = (t) => `<span style="color:${C.soleil}">${t}</span>`;
const big = (t, size, top, { w = 980, color = '#14121F', left = 48 } = {}) => `<div class="title" style="left:${left}px;top:${top}px;width:${w}px;font-size:${size}px;color:${color}">${t}</div>`;
const S = (inner) => G.svgPage(`<defs>${G.tartan}</defs>${inner}`);
const tag = (t, { bg = C.flamme, color = '#fff', y = 140 } = {}) => K.caption({ x: 44, y, size: 32, bg, color, rot: -2, text: t });
const ep = (series, total) => (n, cta, content, o = {}) => K.slide({ n, total, series, cta, content: content + G.band, ...o });
module.exports = { ...K, G, nb, fl, so, big, S, tag, ep };
