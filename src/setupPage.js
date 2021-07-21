const playwright = require('playwright')

const setupPage = async () => {
  const browser = await playwright.chromium.launch()
  const context = await browser.newContext()
  const page = await context.newPage()

  await page.addInitScript(storage => {
    if (window.location.hostname === 'fast.com') {
      window.localStorage.setItem('showAdvanced', 'true')
    }
  })

  page.setDefaultTimeout(45 * 1000)

  return { browser, context, page }
}

module.exports = setupPage
