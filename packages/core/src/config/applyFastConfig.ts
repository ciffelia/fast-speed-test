import { BrowserContext, Page } from 'playwright'
import { FastConfig } from './FastConfig'

const applyFastConfig = async (
  contextOrPage: BrowserContext | Page,
  config: FastConfig
): Promise<void> => {
  await contextOrPage.addInitScript((config: FastConfig) => {
    // @ts-expect-error
    if (location.hostname === 'fast.com') {
      for (const [key, value] of Object.entries(config)) {
        // @ts-expect-error
        localStorage.setItem(key, value)
      }
    }
  }, config)
}

export { applyFastConfig }
