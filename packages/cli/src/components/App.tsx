import React from 'react'
import { Box, Text } from 'ink'
import { FastSpeedTest } from '@fast-speed-test/core'
import { Loading } from './Loading'
import { Section } from './Section'
import { PhaseSummary } from './PhaseSummary'
import { MetricSummary } from './MetricSummary'
import { ClientView } from './ClientView'
import { ServerView } from './ServerView'
import { useProgress } from '../hooks/useProgress'
import { useExitOnComplete } from '../hooks/useExitOnComplete'

interface Props {
  fastSpeedTest: FastSpeedTest
  showDebugRaw?: boolean
}

const App: React.FC<Props> = ({ fastSpeedTest, showDebugRaw }) => {
  const progress = useProgress(fastSpeedTest)
  useExitOnComplete(progress)

  if (progress == null) {
    return (
      <Box marginLeft={2}>
        <Loading />
      </Box>
    )
  }

  return (
    <Box flexDirection="column">
      <PhaseSummary value={progress.phase} />
      <MetricSummary progress={progress} />
      <Section title="Client">
        <ClientView value={progress.client} />
      </Section>
      <Section title="Server">
        <ServerView value={progress.server} />
      </Section>
      {showDebugRaw === true ? (
        <Section title="Raw">
          <Text>{JSON.stringify(progress)}</Text>
        </Section>
      ) : null}
    </Box>
  )
}

export { App }
