import React from 'react'
import { Box, Text } from 'ink'

interface Props {
  title: string
  width?: number
}

const Block: React.FC<Props> = ({ title, width, children }) => {
  return (
    <Box flexDirection="column" alignItems="center" width={width}>
      <Text color="cyan" underline>
        {title}
      </Text>
      <Box>{children}</Box>
    </Box>
  )
}

export { Block }
