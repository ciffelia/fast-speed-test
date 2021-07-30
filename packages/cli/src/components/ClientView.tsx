import React from 'react'
import { Box } from 'ink'
import { Client } from '@fast-speed-test/core'
import { Block } from './Block'
import { LocationView } from './LocationView'
import { PlaceholderText } from './PlaceholderText'
import { OptionalText } from './OptionalText'

interface Props {
  value?: Client
}

const ClientView: React.FC<Props> = ({ value }) => {
  return (
    <Box>
      <Block title="IP Address" width={14}>
        <OptionalText>{value?.ip}</OptionalText>
      </Block>
      <Block title="ISP" width={15}>
        <OptionalText>{value?.isp}</OptionalText>
      </Block>
      <Block title="Location" width={10}>
        {value?.location == null ? (
          <PlaceholderText />
        ) : (
          <LocationView value={value.location} />
        )}
      </Block>
    </Box>
  )
}

export { ClientView }
