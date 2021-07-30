import React from 'react'
import { Text } from 'ink'
import { PlaceholderText } from './PlaceholderText'

const OptionalText: React.FC = ({ children }) => {
  if (children == null) {
    return <PlaceholderText />
  } else {
    return <Text>{children}</Text>
  }
}

export { OptionalText }
