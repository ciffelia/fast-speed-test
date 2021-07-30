import React from 'react'
import { render } from 'ink'
import { FastSpeedTest } from '@fast-speed-test/core'
import { registerUnhandledRejectionHandler } from './registerUnhandledRejectionHandler'
import { App } from './components/App'
import { parseArgs } from './parseArgs'

registerUnhandledRejectionHandler()

const main = async (): Promise<void> => {
  const option = parseArgs()

  const test = new FastSpeedTest({
    browser: option.browser,
    includeAdvancedMetrics: !option.skipAdvanced
  })
  test.start()

  render(<App fastSpeedTest={test} showDebugRaw={option.debug} />)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
