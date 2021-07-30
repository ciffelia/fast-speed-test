import React from 'react'
import { Box, Text } from 'ink'

interface Props {
  title: string
}

const Section: React.FC<Props> = ({ title, children }) => {
  return (
    <Box flexDirection="column" marginTop={1}>
      <Text bold>❯ {title} ❮</Text>
      <Box marginLeft={2}>{children}</Box>
    </Box>
  )
}

export { Section }
