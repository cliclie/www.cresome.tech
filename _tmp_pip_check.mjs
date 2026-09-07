import puppeteer from 'puppeteer';
const URL = 'http://localhost:4173/';
const OUT = 'd:/SynologyDrive/cresome.tech/www.cresome.tech/_tmp_pip.png';
const b = await puppeteer.launch({
  headless: 'new',
  args: ['--no-sandbox','--disable-gpu','--use-gl=angle','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1280,800'],
});
const page = await b.newPage();
await page.evaluateOnNewDocument(() => { localStorage.setItem('cresome.bgMode','map'); });
await page.setViewport({ width: 1280, height: 800, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'domcontentloaded', timeout: 15000 });
await new Promise(r => setTimeout(r, 4000));
const pip = await page.$('.map-pip');
if (pip) { await pip.screenshot({ path: OUT }); console.log('OK -> ' + OUT); }
else { console.log('ERROR: .map-pip not found'); }
await b.close();