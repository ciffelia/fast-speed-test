const getTextContent = async (page, selector) => {
  const elmHandle = await page.$(selector)
  return elmHandle?.evaluate(elm => elm.textContent)
}

module.exports = getTextContent
