import React from 'react'
import { Box } from 'ink'
import { TestProgress } from '@fast-speed-test/core'
import { Section } from './Section'
import { Block } from './Block'
import { MetricView } from './MetricView'

interface Props {
  progress: TestProgress
}

const MetricSummary: React.FC<Props> = ({ progress }) => {
  return (
    <Box flexDirection="column">
      <Section title="Speed">
        <Block title="Download" width={10}>
          <MetricView value={progress.downloadSpeed} />
        </Block>
        <Block title="Upload" width={10}>
          <MetricView value={progress.uploadSpeed} />
        </Block>
      </Section>

      <Section title="Latency">
        <Block title="Unloaded" width={10}>
          <MetricView value={progress.unloadedLatency} />
        </Block>
        <Block title="Loaded" width={10}>
          <MetricView value={progress.loadedLatency} />
        </Block>
      </Section>
    </Box>
  )
}

export { MetricSummary }
