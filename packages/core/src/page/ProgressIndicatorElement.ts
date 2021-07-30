import { ElementHandle, Page } from 'playwright'

type TestStatus = 'Running' | 'Succeeded' | 'Failed' | 'Stopped' | 'Unknown'

class ProgressIndicatorElement {
  private elmHandle?: ElementHandle

  async init(page: Page): Promise<void> {
    const elmHandle = await page.$('#speed-progress-indicator')
    if (elmHandle == null) {
      throw new Error('Failed to find progress indicator element.')
    }

    this.elmHandle = elmHandle
  }

  async status(): Promise<TestStatus> {
    if (this.elmHandle == null) {
      throw new Error('Element not initialized.')
    }

    const classList = await this.classList()
    if (classList.includes('in-progress')) {
      return 'Running'
    } else if (classList.includes('succeeded')) {
      return 'Succeeded'
    } else if (classList.includes('failed')) {
      return 'Failed'
    } else if (classList.includes('stopped')) {
      return 'Stopped'
    } else {
      return 'Unknown'
    }
  }

  private async classList(): Promise<string[]> {
    if (this.elmHandle == null) {
      throw new Error('Element not initialized.')
    }

    return await this.elmHandle.evaluate((elm) =>
      Array.from(elm.classList.values())
    )
  }
}

export { ProgressIndicatorElement }
