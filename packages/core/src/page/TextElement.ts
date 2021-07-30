import { ElementHandle, Page } from 'playwright'

class TextElement {
  private elmHandle?: ElementHandle

  constructor(private readonly selector: string) {}

  async init(page: Page): Promise<void> {
    const elmHandle = await page.$(this.selector)
    if (elmHandle == null) {
      throw new Error('No element matched specified selector.')
    }

    this.elmHandle = elmHandle
  }

  async getText(): Promise<string> {
    if (this.elmHandle == null) {
      throw new Error('Element not initialized.')
    }

    return (await this.elmHandle.innerText()).trim()
  }

  async hasClass(className: string): Promise<boolean> {
    if (this.elmHandle == null) {
      throw new Error('Element not initialized.')
    }

    return await this.elmHandle.evaluate(
      (elm, className) => elm.classList.contains(className),
      className
    )
  }
}

export { TextElement }
