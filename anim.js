// Anime la planche de respiration d'un épisode en vidéo MP4 (1080 x 1350).
// Le halo du soleil grandit pendant 4 s (inspire) puis rétrécit pendant 6 s (expire), deux cycles.
// Usage : node anim.js 01 5      -> épisode commençant par « 01 », planche 5
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const { CSS } = require('./src/kit.js');

const IN = 4, OUT = 6, FPS = 20, CYCLES = 2;

(async () => {
  const [prefix, num] = process.argv.slice(2);
  const file = fs.readdirSync(path.join(__dirname, 'episodes')).find((f) => f.startsWith(prefix));
  const ep = require(path.join(__dirname, 'episodes', file));
  const out = path.join(__dirname, 'carrousels', ep.slug);
  const frames = path.join(out, '.frames');
  fs.mkdirSync(frames, { recursive: true });
  const html = path.join(out, '.tmp.html');
  fs.writeFileSync(html, `<!doctype html><meta charset="utf-8"><style>${CSS('file://' + path.join(__dirname, 'fonts'))}</style><body>${ep.slides[num - 1]}</body>`);

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
  await page.goto('file://' + html);
  await page.evaluate(() => document.fonts.ready);
  const total = (IN + OUT) * FPS;
  for (let i = 0; i < total; i++) {
    const t = i / FPS;
    const inhale = t < IN;
    const k = inhale ? t / IN : 1 - (t - IN) / OUT; // 0..1
    const ease = 0.5 - 0.5 * Math.cos(Math.PI * k);
    await page.evaluate(({ scale, word, count }) => {
      document.querySelector('.breath-halo').style.transform = `scale(${scale})`;
      document.querySelector('.breath-word').textContent = word;
      document.querySelector('.breath-count').textContent = count;
    }, { scale: 1.05 + ease * 1.15, word: inhale ? 'INSPIRE' : 'EXPIRE', count: String(Math.ceil(inhale ? IN - t : IN + OUT - t)) });
    await page.screenshot({ path: path.join(frames, `f${String(i).padStart(4, '0')}.png`) });
  }
  await browser.close();
  const mp4 = path.join(out, `planche-${String(num).padStart(2, '0')}-animee.mp4`);
  execFileSync('ffmpeg', ['-y', '-loglevel', 'error', '-stream_loop', String(CYCLES - 1), '-framerate', String(FPS), '-i', path.join(frames, 'f%04d.png'),
    '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '20', '-movflags', '+faststart', mp4]);
  fs.rmSync(frames, { recursive: true }); fs.unlinkSync(html);
  console.log(path.relative(__dirname, mp4));
})();
