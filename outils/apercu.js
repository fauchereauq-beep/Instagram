// Planche-contact d'un carrousel : node outils/apercu.js <dossier du carrousel> <sortie.png> [début] [fin]
// Exemple : node outils/apercu.js carrousels/41-crash-balade-fantome apercus/41-crash-balade-fantome.png
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const [dir, out, from = '0', to = '99'] = process.argv.slice(2);
  if (!dir || !out) { console.error('Usage : node outils/apercu.js <dossier> <sortie.png> [début] [fin]'); process.exit(1); }
  const imgs = fs.readdirSync(dir).filter((f) => /^planche-\d+\.png$/.test(f)).sort().slice(+from, +to);
  const cols = Math.min(imgs.length, 3), rows = Math.ceil(imgs.length / cols);
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: cols * 550, height: rows * 685 } });
  const html = path.resolve(out + '.html');
  fs.writeFileSync(html, `<body style="margin:0;display:flex;flex-wrap:wrap;background:#333">${imgs.map((f) => `<img src="file://${path.resolve(dir, f)}" style="width:540px;margin:5px">`).join('')}</body>`);
  await page.goto('file://' + html);
  await page.screenshot({ path: out });
  await browser.close();
  fs.unlinkSync(html);
  console.log(out);
})();
