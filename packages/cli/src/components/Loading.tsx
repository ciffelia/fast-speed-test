import React from 'react'
import { Box, Text } from 'ink'
import Spinner from 'ink-spinner'

const Loading: React.FC = () => {
  return (
    <Box>
      <Text color="blue">
        <Spinner />
      </Text>
      <Box marginLeft={1}>
        <Text>Loading</Text>
      </Box>
    </Box>
  )
}

export { Loading }
