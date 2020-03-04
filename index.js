process.on('unhandledRejection', err => { throw err })

const puppeteer = require('puppeteer')

;(async () => {
  const args = process.argv.slice(2)
  const executablePath =
    args.includes('--chrome-executable')
      ? args[args.indexOf('--chrome-executable') + 1]
      : undefined

  const browser = await puppeteer.launch({ executablePath })

  console.log('Chrome launched')

  const page = await browser.newPage()
  await page.goto('https://fast.com/')

  console.log('Fast.com loaded')

  await page.waitFor('#speed-value.succeeded')

  const speedValue = await page.evaluate(() => {
    const speedValueElem = document.getElementById('speed-value')
    return speedValueElem.innerText
  })

  const speedUnits = await page.evaluate(() => {
    const speedUnitsElem = document.getElementById('speed-units')
    return speedUnitsElem.innerText
  })

  console.log(`Result: ${speedValue}${speedUnits}`)

  browser.close()
})()
