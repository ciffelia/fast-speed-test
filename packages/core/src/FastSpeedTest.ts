import playwright from 'playwright'
import { FastSpeedTestOption, TestPhaseList, TestProgress } from './model'
import { launchBrowser } from './launchBrowser'
import { applyFastConfig } from './config/applyFastConfig'
import { FastPage } from './page/FastPage'
import { sleep } from './sleep'
import { PageMetrics } from './page/PageMetrics'

class FastSpeedTest {
  private phase: TestPhaseList = {
    browserStart: 'Pending',
    pageLoad: 'Pending',
    testExecute: 'Pending',
    browserClose: 'Pending'
  }

  private browser?: playwright.Browser
  private context?: playwright.BrowserContext
  private page?: FastPage

  private metricsCache?: PageMetrics

  constructor(private readonly option: FastSpeedTestOption) {}

  start(): void {
    if (this.browser != null || this.context != null || this.page != null) {
      throw new Error('Test has already started.')
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.run()
  }

  async progress(): Promise<TestProgress> {
    const statusList = Object.values(this.phase)
    const completed = statusList.every((status) => status === 'Succeeded')

    const metrics = this.metricsCache ?? (await this.page?.metrics())
    return {
      phase: this.phase,
      completed,
      ...metrics
    }
  }

  private async run(): Promise<void> {
    await this.runPhase('browserStart', async () => {
      await this.runBrowserStartPhase()
    })

    await this.runPhase('pageLoad', async () => {
      await this.runPageLoadPhase()
    })

    await this.runPhase('testExecute', async () => {
      await this.runTestExecutePhase()
    })

    await this.runPhase('browserClose', async () => {
      await this.runBrowserClosePhase()
    })
  }

  private async runBrowserStartPhase(): Promise<void> {
    if (this.browser != null || this.context != null) {
      throw new Error('Browser is already initialized.')
    }

    this.browser = await launchBrowser(this.option.browser)

    this.context = await this.browser.newContext()
    await applyFastConfig(this.context, {
      showAdvanced: this.option.includeAdvancedMetrics
    })
  }

  private async runPageLoadPhase(): Promise<void> {
    if (this.context == null) {
      throw new Error('Browser is not initialized.')
    }
    if (this.page != null) {
      throw new Error('Page is already loaded.')
    }

    const page = new FastPage(this.context)
    await page.init()
    this.page = page
  }

  private async runTestExecutePhase(): Promise<void> {
    if (this.page == null) {
      throw new Error('Page is not loaded.')
    }

    while (await this.page.isTestRunning()) {
      await sleep(200)
    }

    const errorMessage = await this.page.errorMessage()
    if (errorMessage != null) {
      throw new Error(errorMessage)
    }
  }

  private async runBrowserClosePhase(): Promise<void> {
    if (this.browser == null || this.page == null) {
      throw new Error('Browser is not initialized.')
    }

    this.metricsCache = await this.page.metrics()

    await this.browser.close()
    this.browser = undefined
    this.context = undefined
    this.page = undefined
  }

  private async runPhase(
    phase: keyof TestPhaseList,
    fn: () => Promise<void>
  ): Promise<void> {
    this.phase[phase] = 'Running'
    await fn()
    this.phase[phase] = 'Succeeded'
  }
}

export { FastSpeedTest }
