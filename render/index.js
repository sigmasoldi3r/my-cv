const puppeteer = require('puppeteer');
const Koa = require('koa');
const Router = require('@koa/router');
const static = require('koa-static');

const app = new Koa();
app.use(static('pages'));
const serve = () => new Promise(r => app.listen(3000, r));
const log = console.log.bind(console);
const HOST = 'http://localhost:3000';
const router = new Router();
router.get('/', ctx => {
  console.log(`Serving content for rendering...`)
  const cv = require('./cv');
  ctx.body = cv;
  require('fs').writeFileSync('pages/preview.html', cv);
});
app.use(router.routes());

async function main() {
  log(`Starting server...`);
  await serve();
  log(`Launching browser...`);
  const browser = await puppeteer.launch();
  log(`Going to ${HOST}...`);
  const page = await browser.newPage();
  const res = await page.goto(`${HOST}/`, {
    waitUntil: 'networkidle0'
  });
  if (!res.ok() || res.status() !== 200) {
    throw new Error(`Couldn't get a response from the internal server: ${res.status()} ${res.statusText()}`);
  }
  log(`Rendering PDF...`);
  await page.pdf({
    printBackground: true,
    path: `cv-Pablo-Blanco-Celdrán.pdf`,
    format: `A4`,
    margin: {
      top: `20px`,
      bottom: `40px`,
      left: `20px`,
      right: `20px`
    }
  });
  log(`Done! Closing browser...`);
  await browser.close();
  log(`Shutting down internal server...`);
  process.exit(0);
}
main().catch(err => {
  console.error(err);
  process.exit(1);
});
