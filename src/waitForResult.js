const waitForResult = async (page, name) => {
  const valueElm = await page.waitFor(`#${name}-value.succeeded`)
  const unitsElm = await page.waitFor(`#${name}-units.succeeded`)
  
  const value = await valueElm.evaluate(elm => elm.innerText)
  const units = await unitsElm.evaluate(elm => elm.innerText)
  
  return `${value}${units}`
}

module.exports = waitForResult
