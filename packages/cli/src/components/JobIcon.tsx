import React from 'react'
import { Text } from 'ink'
import Spinner from 'ink-spinner'
import { JobStatus } from '@fast-speed-test/core'

interface Props {
  value: JobStatus
}

const JobIcon: React.FC<Props> = ({ value }) => {
  if (value === 'Pending') {
    return <></>
  } else if (value === 'Running') {
    return (
      <Text color="green">
        <Spinner />
      </Text>
    )
  } else if (value === 'Succeeded') {
    return <Text color="green">✔️</Text>
  } else {
    return <Text color="red">❓</Text>
  }
}

export { JobIcon }
