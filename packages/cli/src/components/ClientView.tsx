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
      <Block title="IP Address" minWidth={12}>
        <OptionalText>{value?.ip}</OptionalText>
      </Block>
      <Block title="ISP" minWidth={11}>
        <OptionalText>{value?.isp}</OptionalText>
      </Block>
      <Block title="Location" minWidth={11}>
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
