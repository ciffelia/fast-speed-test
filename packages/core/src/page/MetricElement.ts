import { Page } from 'playwright'
import { TextElement } from './TextElement'
import { Metric } from '../model'

class MetricElement {
  private readonly valueElement: TextElement
  private readonly unitElement: TextElement

  constructor(name: string) {
    this.valueElement = new TextElement(`#${name}-value`)
    this.unitElement = new TextElement(`#${name}-units`)
  }

  async init(page: Page): Promise<void> {
    await Promise.all([
      this.valueElement.init(page),
      this.unitElement.init(page)
    ])
  }

  async getMetric(): Promise<Metric> {
    return {
      value: parseFloat(await this.valueElement.getText()),
      unit: await this.unitElement.getText(),
      succeeded: await this.valueElement.hasClass('succeeded')
    }
  }
}

export { MetricElement }
