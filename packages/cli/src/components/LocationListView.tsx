import React, { ReactNode } from 'react'
import { Box, Text } from 'ink'
import { Location } from '@fast-speed-test/core'
import { LocationView } from './LocationView'
import { PlaceholderText } from './PlaceholderText'

interface Props {
  value: Location[]
}

const LocationListView: React.FC<Props> = ({ value }) => {
  const elmList: ReactNode[] = []

  for (const [i, location] of value.entries()) {
    elmList.push(<LocationView key={`view-${i}`} value={location} />)
    elmList.push(<Text key={`separator-${i}`}> | </Text>)
  }

  elmList.pop()

  if (elmList.length !== 0) {
    return <Box>{elmList}</Box>
  } else {
    return <PlaceholderText />
  }
}

export { LocationListView }
