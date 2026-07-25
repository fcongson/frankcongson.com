'use client'

import { ThemeProvider } from '@fcongson/lagom-ui'
import { GlobalStyle } from 'components/styles'
import siteMetadata from 'content/data/siteMetadata.json'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Footer } from './Footer'
import { Header } from './Header'

const Main = styled.main`
  flex: 1 0 auto;
  min-height: auto;
`

// Sets the data-lagom-theme attribute on <html> based on the user's OS preference.
// The <html> tag itself lives in the server-rendered root layout, so this reaches it
// imperatively rather than trying to render attributes from a client subtree.
const ThemePreferenceWatcher: React.FunctionComponent = () => {
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme:dark)')
    const apply = (matches: boolean) => {
      document.documentElement.dataset.lagomTheme = matches ? 'dark' : 'light'
    }
    apply(media.matches)
    const handler = (ev: MediaQueryListEvent) => apply(ev.matches)
    media.addEventListener('change', handler)
    return () => media.removeEventListener('change', handler)
  }, [])
  return null
}

const { twitterUrl, facebookUrl, instagramUrl, youtubeUrl, linkedinUrl, githubUrl, devUrl } = siteMetadata

export const Layout: React.FunctionComponent<{
  overlayHeader?: boolean
  headerBackgroundColor?: string
  children?: React.ReactNode
}> = ({ overlayHeader = false, headerBackgroundColor, children }) => {
  return (
    <ThemeProvider>
      <ThemePreferenceWatcher />
      <GlobalStyle />
      <Header overlay={overlayHeader} backgroundColor={headerBackgroundColor} />
      <Main>{children}</Main>
      <Footer
        social={{
          twitterUrl,
          facebookUrl,
          instagramUrl,
          youtubeUrl,
          linkedinUrl,
          githubUrl,
          devUrl,
        }}
      />
    </ThemeProvider>
  )
}
