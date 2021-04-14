const puppeteer = require('puppeteer')
const waitForResult = require('./waitForResult')

;(async () => {
  console.log('Launching Chrome...')

  const browser = await puppeteer.launch()

  console.log('Loading Fast.com...')

  const page = await browser.newPage()
  await page.goto('https://fast.com/')

  console.log('Running tests...')

  page.setDefaultTimeout(90 * 1000)

  await Promise.all([
    (async () => {
      const showMoreDetailsButton = await page.waitForSelector('#show-more-details-link', { visible: true })
      await showMoreDetailsButton.click()
    })(),
    (async () => {
      const downloadSpeed = await waitForResult(page, 'speed')
      console.log(`Download speed: ${downloadSpeed}`)
    })(),
    (async () => {
      const uploadSpeed = await waitForResult(page, 'upload')
      console.log(`Upload speed: ${uploadSpeed}`)
    })(),
    (async () => {
      const unloadedLatency = await waitForResult(page, 'latency')
      console.log(`Unloaded latency: ${unloadedLatency}`)
    })(),
    (async () => {
      const loadedLatency = await waitForResult(page, 'bufferbloat')
      console.log(`Loaded latency: ${loadedLatency}`)
    })()
  ])

  browser.close()
})()
