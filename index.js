const fs = require('fs');
const puppeteer = require('puppeteer');

const useDockerChromium = process.argv.slice(2).includes('--docker-chromium');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: useDockerChromium ? './docker-chromium.sh' : undefined
  });

  console.log('Chrome launched');
  
  const page = await browser.newPage();
  await page.goto('https://fast.com/');

  console.log('Fast.com loaded');

  await page.waitFor('#speed-value.succeeded');
  
  const currentTime = Math.floor(new Date().getTime() / 1000);

  const speedValue = await page.evaluate(() => {
    const speedValueElem = document.getElementById('speed-value');
    return Promise.resolve(speedValueElem.innerText);
  });

  const speedUnits = await page.evaluate(() => {
    const speedUnitsElem = document.getElementById('speed-units');
    return Promise.resolve(speedUnitsElem.innerText);
  });

  console.log(speedValue + speedUnits);

  fs.appendFileSync('result.csv', currentTime + ',' + speedValue + ',' + speedUnits + '\n');

  browser.close();
})().catch(err => {
  console.error(err);
  process.exit(1);
});

