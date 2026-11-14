// Génère les planches PNG (1080 x 1350, format portrait Instagram).
// Usage : node build.js            -> tous les épisodes
//         node build.js ep01       -> un seul épisode
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const { CSS } = require('./src/kit.js');

(async () => {
  const filter = process.argv[2];
  const files = fs.readdirSync(path.join(__dirname, 'episodes')).filter((f) => f.endsWith('.js') && (!filter || f.startsWith(filter)));
  const fontDir = 'file://' + path.join(__dirname, 'fonts');
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });

  for (const f of files) {
    const ep = require(path.join(__dirname, 'episodes', f));
    const out = path.join(__dirname, 'carrousels', ep.slug);
    fs.mkdirSync(out, { recursive: true });
    const tmp = path.join(out, '.tmp.html');
    for (let i = 0; i < ep.slides.length; i++) {
      fs.writeFileSync(tmp, `<!doctype html><meta charset="utf-8"><style>${CSS(fontDir)}</style><body>${ep.slides[i]}</body>`);
      await page.goto('file://' + tmp);
      await page.evaluate(() => document.fonts.ready);
      const file = path.join(out, `planche-${String(i + 1).padStart(2, '0')}.png`);
      await page.screenshot({ path: file });
      console.log(path.relative(__dirname, file));
    }
    fs.unlinkSync(tmp);
  }
  await browser.close();
})();
