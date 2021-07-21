const setupPage = require('./setupPage')
const waitForTestComplete = require('./waitForTestComplete')
const extractTestResult = require('./extractTestResult')

const main = async () => {
  console.log('Launching Chromium...')
  const { browser, page } = await setupPage()

  console.log('Measuring...')
  await page.goto('https://fast.com/')
  await waitForTestComplete(page)

  const result = await extractTestResult(page)
  console.log(`Download speed: ${result.speed.download}, Upload speed: ${result.speed.upload}`)
  console.log(`Unloaded latency: ${result.latency.unloaded}, Loaded latency: ${result.latency.loaded}`)
  console.log(`Client: ${result.client.location} | ${result.client.ip} | ${result.client.isp ?? 'Unknown ISP'}`)
  console.log(`Server: ${result.server.locations.join(' | ')}`)

  await browser.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
