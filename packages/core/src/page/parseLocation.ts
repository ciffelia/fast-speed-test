import { Location } from '../model'

const parseLocation = (locationString: string): Location | undefined => {
  const match = locationString.match(/^(.+), (\w+)$/)

  if (match == null) {
    return undefined
  } else {
    return { city: match[1], country: match[2] }
  }
}

export { parseLocation }
