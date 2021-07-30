import { Location } from '../model'
import { parseLocation } from './parseLocation'

const parseLocationList = (locationListString: string): Location[] => {
  // \u00A0: NBSP
  return locationListString
    .split('\u00A0\u00A0|\u00A0\u00A0')
    .map(parseLocation)
    .filter((location) => location != null) as Location[]
}

export { parseLocationList }
