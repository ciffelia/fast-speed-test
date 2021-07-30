import React from 'react'
import { Box } from 'ink'
import { Server } from '@fast-speed-test/core'
import { LocationListView } from './LocationListView'
import { PlaceholderText } from './PlaceholderText'

interface Props {
  value?: Server
}

const ServerView: React.FC<Props> = ({ value }) => {
  return (
    <Box>
      {value == null ? (
        <PlaceholderText />
      ) : (
        <LocationListView value={value.locations} />
      )}
    </Box>
  )
}

export { ServerView }
