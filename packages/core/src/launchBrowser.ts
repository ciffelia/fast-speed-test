import playwright, { Browser } from 'playwright'
import { BrowserName } from './model'

const launchBrowser = async (browserName: BrowserName): Promise<Browser> => {
  const browserType = playwright[browserName]
  return await browserType.launch()
}

export { launchBrowser }
