import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'

const logger = pino({
  level: process.env.LOG_LEVEL || (isProd ? 'info' : 'debug'),
  // pino-pretty makes local dev logs human-readable; in prod we keep
  // raw JSON so it's easy to ship to a log aggregator (Datadog, CloudWatch, etc).
  transport: isProd
    ? undefined
    : {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'SYS:standard' },
      },
})

export default logger