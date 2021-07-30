import { Page } from 'playwright'
import { TextElement } from './TextElement'
import { Server } from '../model'
import { parseLocationList } from './parseLocationList'

class ServerElement {
  private readonly locationListElement = new TextElement('#server-locations')

  async init(page: Page): Promise<void> {
    await this.locationListElement.init(page)
  }

  async getServer(): Promise<Server> {
    return {
      locations: parseLocationList(await this.locationListElement.getText())
    }
  }
}

export { ServerElement }
