import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log(`REQUEST FAILED: ${request.url()} - ${request.failure()?.errorText || 'unknown'}`);
  });

  await page.goto('http://localhost:3000/Visual-Analysis-Engine/');
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: 'screenshot.png' });

  await browser.close();
})();
