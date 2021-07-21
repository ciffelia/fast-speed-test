const getTextContent = require('./getTextContent')

const extractMetrics = async (page, name) => {
  return {
    value: await getTextContent(page, `#${name}-value`),
    units: await getTextContent(page, `#${name}-units`),
    toString () {
      return `${this.value}${this.units}`
    }
  }
}

module.exports = extractMetrics
