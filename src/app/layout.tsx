import { GoogleAnalytics } from '@next/third-parties/google'
import '@fcongson/lagom-ui/style.css'
import 'components/styles/font.css'
import type { Metadata } from 'next'
import React from 'react'
import 'stylesheets/resetr.css'
import siteMetadata from '../../content/data/siteMetadata.json'
import { StyledComponentsRegistry } from '../lib/registry'
import { SentryInit } from '../lib/sentry-init'
import { RootProviders } from './providers'

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s - ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  authors: [{ name: siteMetadata.author }],
}

const gaTrackingId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_TRACKING_ID

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={siteMetadata.siteLanguage}>
      <head>
        <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap'
          rel='stylesheet'
        />
      </head>
      <body suppressHydrationWarning>
        <StyledComponentsRegistry>
          <RootProviders>{children}</RootProviders>
        </StyledComponentsRegistry>
        <SentryInit />
        {gaTrackingId && <GoogleAnalytics gaId={gaTrackingId} />}
      </body>
    </html>
  )
}
