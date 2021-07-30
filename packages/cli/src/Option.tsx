import { BrowserName } from '@fast-speed-test/core'

export interface Option {
  browser: BrowserName
  skipAdvanced: boolean
  debug: boolean
}
