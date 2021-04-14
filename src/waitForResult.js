const waitForResult = async (page, name) => {
  const valueElm = await page.waitForSelector(`#${name}-value.succeeded`)
  const unitsElm = await page.waitForSelector(`#${name}-units.succeeded`)

  const value = await valueElm.evaluate(elm => elm.innerText)
  const units = await unitsElm.evaluate(elm => elm.innerText)

  return `${value}${units}`
}

module.exports = waitForResult
