/*Make the local bugs human readable*/

import pino from 'pino'

const isProd = process.env.NODE_ENV === 'production'

const logger = pino({
  level: process.env.LOG_LEVEL || (isProd ? 'info' : 'debug'),

  transport: isProd
    ? undefined
    : {
        target: 'pino-pretty',
        options: { colorize: true, translateTime: 'SYS:standard' },
      },
})

export default logger