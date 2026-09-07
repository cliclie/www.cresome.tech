import puppeteer from 'puppeteer';
const URL = 'http://localhost:4173/';
const OUT = 'd:/cresome.tech/www.cresome.tech/_tmp_pip.png';
const b = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox','--disable-gpu','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1280,800'],
});
const page = await b.newPage();
page.on('pageerror', (e) => console.log('PAGEERROR: ' + e.message));
page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE-ERR: ' + m.text()); });
await page.evaluateOnNewDocument(() => { localStorage.setItem('cresome.bgMode','map'); });
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 15000, cache: 'reload' });
await page.waitForFunction(
  () => ![...document.querySelectorAll('.map-bg *')].some(el => el.textContent && el.textContent.includes('地図を読み込んでいます')),
  { timeout: 30000 },
).catch(() => console.log('WARN: 読み込みインジケータ消滅を待ち切れ'));
await new Promise(r => setTimeout(r, 3000));
const pip = await page.$('.map-pip');
if (pip) {
  await pip.screenshot({ path: OUT });
  console.log('OK -> ' + OUT);
  await new Promise(r => setTimeout(r, 6000));
  await pip.screenshot({ path: OUT.replace('.png', '_2.png') });
  console.log('OK -> ' + OUT.replace('.png', '_2.png'));
} else { console.log('ERROR: .map-pip not found'); }
await b.close();