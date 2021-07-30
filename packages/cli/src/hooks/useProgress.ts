import { useState } from 'react'
import { useInterval, useMount } from 'react-use'
import { FastSpeedTest, TestProgress } from '@fast-speed-test/core'

const useProgress = (
  fastSpeedTest: FastSpeedTest
): TestProgress | undefined => {
  const [progress, setProgress] = useState<TestProgress>()

  const fetchProgress = (): void => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fastSpeedTest.progress().then((progress) => {
      setProgress(progress)
    })
  }
  useMount(fetchProgress)
  useInterval(fetchProgress, 500)

  return progress
}

export { useProgress }
