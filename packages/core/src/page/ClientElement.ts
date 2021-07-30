import { Page } from 'playwright'
import { TextElement } from './TextElement'
import { Client } from '../model'
import { parseLocation } from './parseLocation'

class ClientElement {
  private readonly ipElement = new TextElement('#user-ip')
  private readonly locationElement = new TextElement('#user-location')
  private readonly ispElement = new TextElement('#user-isp')

  async init(page: Page): Promise<void> {
    await Promise.all([
      this.ipElement.init(page),
      this.locationElement.init(page),
      this.ispElement.init(page)
    ])
  }

  async getClient(): Promise<Client> {
    const ip = await this.ipElement.getText()
    const isp = await this.ispElement.getText()
    const location = await this.locationElement.getText()

    return {
      ip: ip !== '' ? ip : undefined,
      isp: isp !== '' ? isp : undefined,
      location: parseLocation(location)
    }
  }
}

export { ClientElement }
