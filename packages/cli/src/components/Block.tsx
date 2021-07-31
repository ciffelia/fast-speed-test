import React from 'react'
import { Box, Text } from 'ink'

interface Props {
  title: string
  minWidth?: number
}

const Block: React.FC<Props> = ({ title, minWidth, children }) => {
  return (
    <Box flexDirection="column" alignItems="center" minWidth={minWidth}>
      <Text color="cyan" underline>
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  )
}

export { Block }
