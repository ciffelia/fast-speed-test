const waitForTestComplete = async page => {
  const requiredSelectorList = [
    '#speed-units.succeeded', '#speed-value.succeeded',
    '#upload-units.succeeded', '#upload-value.succeeded',
    '#latency-units.succeeded', '#latency-value.succeeded',
    '#bufferbloat-units.succeeded', '#bufferbloat-value.succeeded'
  ]

  await Promise.all(
    requiredSelectorList.map(selector => page.waitForSelector(selector))
  )
}

module.exports = waitForTestComplete
