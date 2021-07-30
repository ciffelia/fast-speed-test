import React from 'react'
import { Text } from 'ink'
import { Location } from '@fast-speed-test/core'

interface Props {
  value: Location
}

const LocationView: React.FC<Props> = ({ value }) => {
  return (
    <Text>
      {value.city}, {value.country}
    </Text>
  )
}

export { LocationView }
