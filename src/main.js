const setupPage = require('./setupPage')
const waitForTestComplete = require('./waitForTestComplete')
const extractTestResult = require('./extractTestResult')

const main = async () => {
  console.log('Launching Chromium...')
  const { browser, page } = await setupPage()

  console.log('Measuring...')
  await page.goto('https://fast.com/')
  await waitForTestComplete(page)

  const { speed, latency, client, server } = await extractTestResult(page)
  console.log(`Download speed: ${speed.download}, Upload speed: ${speed.upload}`)
  console.log(`Unloaded latency: ${latency.unloaded}, Loaded latency: ${latency.loaded}`)
  console.log(`Client: ${client.location} | ${client.ip} | ${client.isp !== '' ? client.isp : 'Unknown ISP'}`)
  console.log(`Server: ${server.locations.join(' | ')}`)

  await browser.close()
}

main().catch(err => {
  console.error(err)
  process.exit(1)
})
