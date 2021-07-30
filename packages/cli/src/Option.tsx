import { BrowserName } from '@fast-speed-test/core'

export type OutputFormat = 'realtime' | 'static'

export interface Option {
  browser: BrowserName
  skipAdvanced: boolean
  output: OutputFormat
  debug: boolean
}
