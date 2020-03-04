process.on('unhandledRejection', err => { throw err })

const puppeteer = require('puppeteer')
const waitForResult = require('./waitForResult')

;(async () => {
  const args = process.argv.slice(2)
  const executablePath =
    args.includes('--chrome-executable')
      ? args[args.indexOf('--chrome-executable') + 1]
      : undefined

  console.log('Launching Chrome...')

  const browser = await puppeteer.launch({ executablePath })

  console.log('Loading Fast.com...')

  const page = await browser.newPage()
  await page.goto('https://fast.com/')

  console.log('Testing...')

  page.setDefaultTimeout(90 * 1000)

  await Promise.all([
    (async () => {
      const showMoreDetailsButton = await page.waitFor('#show-more-details-link', { visible: true })
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

  console.log('Closing Chrome...')

  browser.close()
})()
