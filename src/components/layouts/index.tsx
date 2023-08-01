import { ThemeProvider as LagomThemeProvider } from '@fcongson/lagom-ui'
import * as Sentry from '@sentry/browser'
import { SEO as Seo } from 'components/SEO'
import { GlobalStyle, theme } from 'components/styles'
import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import 'stylesheets/resetr.css'
import { Footer } from './Footer'
import { Header } from './Header'

Sentry.init({ dsn: process.env.SENTRY_DSN })

const Main = styled.main`
  flex: 1 0 auto;
  min-height: auto;
`

const SITE_QUERY = graphql`
  query SITE {
    site {
      siteMetadata {
        title
        twitterUrl
        facebookUrl
        instagramUrl
        youtubeUrl
        linkedinUrl
        githubUrl
        devUrl
      }
    }
  }
`

export const Layout: React.FunctionComponent<{
  overlayHeader?: boolean
  headerBackgroundColor?: string
  children?: React.ReactNode
}> = ({ overlayHeader = false, headerBackgroundColor, children }) => {
  const { site } = useStaticQuery(SITE_QUERY)

  const { title, twitterUrl, facebookUrl, instagramUrl, youtubeUrl, linkedinUrl, githubUrl, devUrl } = site.siteMetadata

  return (
    <>
      <Helmet>
        <html data-lagom-theme='light' />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover' />
        <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='anonymous'></link>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
      </Helmet>
      <Seo />
      <LagomThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
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
      </LagomThemeProvider>
    </>
  )
}
