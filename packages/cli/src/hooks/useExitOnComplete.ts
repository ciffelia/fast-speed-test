import { useEffect } from 'react'
import { useApp } from 'ink'
import { TestProgress } from '@fast-speed-test/core'

const useExitOnComplete = (progress: TestProgress | undefined): void => {
  const { exit } = useApp()

  useEffect(() => {
    if (progress?.completed === true) {
      exit()
    }
  }, [progress])
}

export { useExitOnComplete }
