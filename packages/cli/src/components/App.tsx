import React from 'react'
import { FastSpeedTest } from '@fast-speed-test/core'
import { Loading } from './Loading'
import { useProgress } from '../hooks/useProgress'
import { useExitOnComplete } from '../hooks/useExitOnComplete'
import { OutputFormat } from '../Option'
import { ProgressView } from './ProgressView'

interface Props {
  fastSpeedTest: FastSpeedTest
  outputFormat: OutputFormat
  showRaw: boolean
}

const App: React.FC<Props> = ({ fastSpeedTest, outputFormat, showRaw }) => {
  const progress = useProgress(fastSpeedTest)
  useExitOnComplete(progress)

  if (outputFormat === 'realtime') {
    if (progress == null) {
      return <Loading />
    } else {
      return <ProgressView progress={progress} showRaw={showRaw} />
    }
  } else if (outputFormat === 'static') {
    if (progress == null || !progress.completed) {
      return null
    } else {
      return <ProgressView progress={progress} showRaw={showRaw} />
    }
  }

  return null
}

export { App }
