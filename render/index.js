const puppeteer = require('puppeteer');
const Koa = require('koa');
const Router = require('@koa/router');
const static = require('koa-static');
const { load, setLanguage } = require('./loc');
const { join } = require('path')

load('lang/es.yml');
load('lang/en.yml');

const ROOT = 'docs'

// This enables us to serve the page at github pages!
const HTML_OUTPUT_FILE = join(ROOT, 'index.html')

const app = new Koa();
app.use(static(ROOT));
const serve = () => new Promise(r => app.listen(3000, r));
const log = console.log.bind(console);
const HOST = 'http://localhost:3000';
const router = new Router();
const cv = require('./cv');
router.get('/:lang', ctx => {
  const lang = ctx.params.lang;
  setLanguage(lang);
  log(`Compiling for language ${lang}...`)
  ctx.body = cv();
  require('fs').writeFileSync(HTML_OUTPUT_FILE, ctx.body);
});
app.use(router.routes());

async function main() {
  log(`Starting server...`);
  await serve();
  log(`Launching browser...`);
  const browser = await puppeteer.launch();
  for (const lang of ['en', 'es']) {
    log(`Going to ${HOST}/${lang}...`);
    const page = await browser.newPage();
    const res = await page.goto(`${HOST}/${lang}`, {
      waitUntil: 'networkidle0'
    });
    if (!res.ok() || res.status() !== 200) {
      throw new Error(`Couldn't get a response from the internal server: ${res.status()} ${res.statusText()}`);
    }
    log(`Rendering PDF...`);
    await page.pdf({
      printBackground: true,
      path: `cv-Pablo-Blanco-Celdrán-${lang}.pdf`,
      format: `A4`,
      margin: {
        top: `10px`,
        bottom: `10px`,
        left: `0px`,
        right: `0px`
      },
      scale: 1
    });
  }
  log(`Done! Closing browser...`);
  await browser.close();
  log(`Shutting down internal server...`);
  process.exit(0);
}
main().catch(err => {
  console.error(err);
  process.exit(1);
});
