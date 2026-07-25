'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

export const SentryInit: React.FunctionComponent = () => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
      Sentry.init({ dsn: process.env.NEXT_PUBLIC_SENTRY_DSN })
    }
  }, [])
  return null
}
