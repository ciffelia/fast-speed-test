export type BrowserName = 'chromium' | 'firefox' | 'webkit'

export interface FastSpeedTestOption {
  browser: BrowserName
  includeAdvancedMetrics: boolean
}

export type JobStatus = 'Pending' | 'Running' | 'Succeeded'

export interface TestPhaseList {
  browserStart: JobStatus
  pageLoad: JobStatus
  testExecute: JobStatus
  browserClose: JobStatus
}

export interface Metric {
  value: number
  unit: string
  succeeded: boolean
}

export interface Location {
  city: string
  country: string
}

export interface Client {
  ip?: string
  isp?: string
  location?: Location
}

export interface Server {
  locations: Location[]
}

export interface TestProgress {
  phase: TestPhaseList
  completed: boolean
  downloadSpeed?: Metric
  uploadSpeed?: Metric
  unloadedLatency?: Metric
  loadedLatency?: Metric
  client?: Client
  server?: Server
}
