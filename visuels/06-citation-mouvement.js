// Visuel unique n°6 — FORMAT CITATION : la phrase de Quentin sur le mouvement (horlogerie). Fond nuit.
// Citation reprise mot pour mot du site (section « Qui je suis »).
const { K, typo, pill, photoRonde, signature, page } = require('../src/site.js');

// Rouage en filigrane (clin d'œil à l'horlogerie).
function rouage(cx, cy, r, dents = 18, op = 0.1) {
  const pts = [];
  for (let i = 0; i < dents * 2; i++) {
    const a = (i * Math.PI) / dents, rr = i % 2 ? r : r * 0.86;
    const a1 = a - Math.PI / dents / 2, a2 = a + Math.PI / dents / 2;
    pts.push(`${(cx + rr * Math.cos(a1)).toFixed(1)},${(cy + rr * Math.sin(a1)).toFixed(1)}`, `${(cx + rr * Math.cos(a2)).toFixed(1)},${(cy + rr * Math.sin(a2)).toFixed(1)}`);
  }
  return `<g opacity="${op}" fill="none" stroke="${K.soleil}" stroke-width="5"><polygon points="${pts.join(' ')}"/><circle cx="${cx}" cy="${cy}" r="${r * 0.55}"/><circle cx="${cx}" cy="${cy}" r="${r * 0.14}"/>
    ${[0, 1, 2, 3, 4].map((k) => { const a = (k * 2 * Math.PI) / 5; return `<path d="M ${(cx + r * 0.14 * Math.cos(a)).toFixed(1)} ${(cy + r * 0.14 * Math.sin(a)).toFixed(1)} L ${(cx + r * 0.55 * Math.cos(a)).toFixed(1)} ${(cy + r * 0.55 * Math.sin(a)).toFixed(1)}"/>`; }).join('')}</g>`;
}

function post() {
  return page(1350, `<svg class="abs" style="left:0;top:0" width="1080" height="1350">${rouage(930, 190, 250, 22, 0.12)}${rouage(1010, 1120, 150, 16, 0.07)}</svg>
    ${pill('Qui je suis', { y: 70 })}
    <div class="abs t" style="left:56px;top:150px;font-size:220px;line-height:1;color:${K.soleil}">“</div>
    <div class="abs t" style="left:64px;top:320px;width:950px;font-size:80px;line-height:1.1;letter-spacing:-.025em;color:${K.creme}">${typo('Dans une montre, le cœur s\'appelle le mouvement.')}<br><span style="color:${K.soleil}">${typo('Moi, je remets le tien en\u00a0marche.')}</span></div>
    ${photoRonde(76, 870, 190)}
    <div class="abs" style="left:340px;top:895px;width:680px">
      <div class="t" style="font-size:44px;color:${K.creme}">Quentin Fauchereau</div>
      <div style="font-family:Inter;font-size:27px;line-height:1.4;color:rgba(255,246,234,.78);margin-top:8px">${typo('À l\'établi dans l\'horlogerie de luxe.')}<br>${typo('Déclencheur de projets.')}</div></div>
    ${signature(1290, { sombre: true })}`, { bg: K.nuit });
}

module.exports = { slug: '06-citation-mouvement', formats: { post: { w: 1080, h: 1350, html: post() } } };
