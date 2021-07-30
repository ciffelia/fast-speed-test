import React from 'react'
import { Box, Text } from 'ink'
import { TestProgress } from '@fast-speed-test/core'
import { Section } from './Section'
import { PhaseSummary } from './PhaseSummary'
import { MetricSummary } from './MetricSummary'
import { ClientView } from './ClientView'
import { ServerView } from './ServerView'

interface Props {
  progress: TestProgress
  showRaw: boolean
}

const ProgressView: React.FC<Props> = ({ progress, showRaw }) => {
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
      {showRaw ? (
        <Section title="Raw">
          <Text>{JSON.stringify(progress)}</Text>
        </Section>
      ) : null}
    </Box>
  )
}

export { ProgressView }
