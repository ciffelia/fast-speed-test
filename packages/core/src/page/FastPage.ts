import { BrowserContext, Page } from 'playwright'
import { MetricElement } from './MetricElement'
import { ClientElement } from './ClientElement'
import { ServerElement } from './ServerElement'
import { ProgressIndicatorElement } from './ProgressIndicatorElement'
import { ErrorMessageElement } from './ErrorMessageElement'
import { PageMetrics } from './PageMetrics'

class FastPage {
  private page?: Page
  private readonly progressIndicatorElement = new ProgressIndicatorElement()
  private readonly errorMessageElement = new ErrorMessageElement()
  private readonly downloadSpeedElement = new MetricElement('speed')
  private readonly uploadSpeedElement = new MetricElement('upload')
  private readonly unloadedLatencyElement = new MetricElement('latency')
  private readonly loadedLatencyElement = new MetricElement('bufferbloat')
  private readonly clientElement = new ClientElement()
  private readonly serverElement = new ServerElement()

  constructor(private readonly context: BrowserContext) {}

  async init(): Promise<void> {
    const page = await this.context.newPage()
    await page.goto('https://fast.com/')
    this.page = page

    await Promise.all([
      this.downloadSpeedElement.init(this.page),
      this.uploadSpeedElement.init(this.page),
      this.unloadedLatencyElement.init(this.page),
      this.loadedLatencyElement.init(this.page),
      this.clientElement.init(this.page),
      this.serverElement.init(this.page),
      this.progressIndicatorElement.init(this.page),
      this.errorMessageElement.init(this.page)
    ])
  }

  async metrics(): Promise<PageMetrics> {
    return {
      downloadSpeed: await this.downloadSpeedElement.getMetric(),
      uploadSpeed: await this.uploadSpeedElement.getMetric(),
      unloadedLatency: await this.unloadedLatencyElement.getMetric(),
      loadedLatency: await this.loadedLatencyElement.getMetric(),
      client: await this.clientElement.getClient(),
      server: await this.serverElement.getServer()
    }
  }

  async isTestRunning(): Promise<boolean> {
    return (await this.progressIndicatorElement.status()) === 'Running'
  }

  async errorMessage(): Promise<string | undefined> {
    return await this.errorMessageElement.getErrorMessage()
  }
}

export { FastPage }
