import yargs from 'yargs/yargs'
import { hideBin } from 'yargs/helpers'
import { Option } from './Option'

const parseArgs = (): Option => {
  const argv = yargs(hideBin(process.argv))
    .strict()
    .version(false)
    .help()
    .alias('h', 'help')
    .options({
      browser: {
        choices: ['chromium', 'firefox', 'webkit'],
        default: 'chromium',
        alias: 'b'
      },
      skipAdvanced: {
        type: 'boolean',
        description: 'Skip advanced metrics',
        default: false,
        alias: 's'
      },
      debug: {
        type: 'boolean',
        hidden: true,
        default: false
      }
    })
    .parseSync()

  return argv as Option
}

export { parseArgs }
