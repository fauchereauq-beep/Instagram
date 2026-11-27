// Rend un visuel unique (post et story) en PNG.
// Usage : node outils/visuel.js 01-balade-6-etapes  ->  visuels/01-balade-6-etapes/post.png + story.png
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { CSS } = require('../src/kit.js');

(async () => {
  const racine = path.join(__dirname, '..');
  const v = require(path.join(racine, 'visuels', `${process.argv[2]}.js`));
  const out = path.join(racine, 'visuels', v.slug);
  fs.mkdirSync(out, { recursive: true });
  const fontDir = 'file://' + path.join(racine, 'fonts');
  const browser = await chromium.launch();
  for (const [nom, f] of Object.entries(v.formats)) {
    const page = await browser.newPage({ viewport: { width: f.w, height: f.h }, deviceScaleFactor: 1 });
    const tmp = path.join(out, `.${nom}.html`);
    fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${CSS(fontDir)}body{width:${f.w}px;height:${f.h}px}</style><body>${f.html}</body>`);
    await page.goto('file://' + tmp);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(out, `${nom}.png`) });
    fs.unlinkSync(tmp);
    console.log(`visuels/${v.slug}/${nom}.png`);
  }
  await browser.close();
})();
