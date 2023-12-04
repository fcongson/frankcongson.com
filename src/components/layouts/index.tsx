import * as Sentry from '@sentry/browser'
import { SEO as Seo } from 'components/SEO'
import { GlobalStyle } from 'components/styles'
import 'components/styles/font.css'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
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

  const [prefersDark, setPrefersDark] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme:dark)')
    setPrefersDark(media.matches)
    media.onchange = (ev) => {
      ev.matches ? setPrefersDark(true) : setPrefersDark(false)
    }
  }, [])

  return (
    <>
      <Helmet>
        <html data-lagom-theme={prefersDark ? 'dark' : 'light'} />
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover' />
        <link rel='preconnect' href='https://fonts.gstatic.com/' crossOrigin='anonymous'></link>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'
        ></link>
      </Helmet>
      <Seo />
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
    </>
  )
}
