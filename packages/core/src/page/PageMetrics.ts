import { Client, Metric, Server } from '../model'

export interface PageMetrics {
  downloadSpeed?: Metric
  uploadSpeed?: Metric
  unloadedLatency?: Metric
  loadedLatency?: Metric
  client?: Client
  server?: Server
}
