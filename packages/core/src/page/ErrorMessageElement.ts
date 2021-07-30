import { ElementHandle, Page } from 'playwright'

class ErrorMessageElement {
  private elmHandleList?: ElementHandle[]

  async init(page: Page): Promise<void> {
    this.elmHandleList = await page.$$('.error-message')
  }

  async getErrorMessage(): Promise<string | undefined> {
    if (this.elmHandleList == null) {
      throw new Error('Element not initialized.')
    }

    const errorMessageList: string[] = []
    for (const elmHandle of this.elmHandleList) {
      if (await elmHandle.isVisible()) {
        const innerText = await elmHandle.innerText()
        errorMessageList.push(innerText.trim())
      }
    }

    if (errorMessageList.length === 0) {
      return undefined
    } else {
      return errorMessageList.join('\n')
    }
  }
}

export { ErrorMessageElement }
