const extractMetrics = require('./extractMetrics')
const getTextContent = require('./getTextContent')

const extractTestResult = async page => ({
  speed: {
    download: await extractMetrics(page, 'speed'),
    upload: await extractMetrics(page, 'upload')
  },
  latency: {
    unloaded: await extractMetrics(page, 'latency'),
    loaded: await extractMetrics(page, 'bufferbloat')
  },
  client: {
    ip: await getTextContent(page, '#user-ip'),
    location: await getTextContent(page, '#user-location'),
    isp: await getTextContent(page, '#user-isp')
  },
  server: {
    locations: (await getTextContent(page, '#server-locations')).split('  |  ')
  }
})

module.exports = extractTestResult
