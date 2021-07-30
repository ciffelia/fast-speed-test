import React from 'react'
import { Box, Text } from 'ink'
import { TestPhaseList } from '@fast-speed-test/core'
import { JobIcon } from './JobIcon'

interface Props {
  value: TestPhaseList
}

const PhaseSummary: React.FC<Props> = ({ value }) => {
  return (
    <Box flexDirection="column">
      <Box>
        <Box width={3}>
          <JobIcon value={value.browserStart} />
        </Box>
        <Box>
          <Text>Launch Browser</Text>
        </Box>
      </Box>
      <Box>
        <Box width={3}>
          <JobIcon value={value.pageLoad} />
        </Box>
        <Box>
          <Text>Load Fast.com</Text>
        </Box>
      </Box>
      <Box>
        <Box width={3}>
          <JobIcon value={value.testExecute} />
        </Box>
        <Box>
          <Text>Execute Speed Test</Text>
        </Box>
      </Box>
      <Box>
        <Box width={3}>
          <JobIcon value={value.browserClose} />
        </Box>
        <Box>
          <Text>Close Browser</Text>
        </Box>
      </Box>
    </Box>
  )
}

export { PhaseSummary }
