import React from 'react'
import { Box, Text } from 'ink'
import { Metric } from '@fast-speed-test/core'
import { PlaceholderText } from './PlaceholderText'

interface Props {
  value: Metric | undefined
}

const MetricView: React.FC<Props> = ({ value }) => {
  if (value == null) {
    return <PlaceholderText />
  }

  return (
    <Box>
      <Box>
        <Text dimColor={!value.succeeded}>{value.value}</Text>
      </Box>
      <Box marginLeft={1}>
        <Text dimColor={!value.succeeded}>{value.unit}</Text>
      </Box>
    </Box>
  )
}

export { MetricView }
