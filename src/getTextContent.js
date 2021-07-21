const getTextContent = async (page, selector) => {
  return page.$eval(selector, elm => elm.textContent)
}

module.exports = getTextContent
