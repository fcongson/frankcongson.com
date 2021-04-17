import * as Sentry from '@sentry/browser'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled, { ThemeProvider } from 'styled-components'
import '../../stylesheets/resetr.css'
import Seo from '../SEO'
import theme, { GlobalStyle } from '../styles'
import Footer from './Footer'
import Header from './Header'

Sentry.init({ dsn: process.env.SENTRY_DSN })

const Main = styled.main`
  flex: 1 0 auto;
  min-height: auto;
`

const siteQuery = graphql`
  query SiteQuery {
    site {
      siteMetadata {
        title
        twitterUrl
        facebookUrl
        instagramUrl
        youtubeUrl
        linkedinUrl
        githubUrl
      }
    }
  }
`

const Layout = ({ overlayHeader, children }) => {
  const { site } = useStaticQuery(siteQuery)
  const [noFocusOutline, setNoFocusOutline] = useState(true)

  const { title, twitterUrl, facebookUrl, instagramUrl, youtubeUrl, linkedinUrl, githubUrl } = site.siteMetadata

  const a11yHandler = ({ keyCode }) => {
    // Add focus outline when tab key is pressed
    if (keyCode === 9) {
      setNoFocusOutline(false)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', a11yHandler)
    window.addEventListener('keyup', a11yHandler)
    return () => {
      window.removeEventListener('keydown', a11yHandler)
      window.removeEventListener('keyup', a11yHandler)
    }
  }, [])

  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='viewport' content='width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover' />
        <link rel='preconnect' href='https://fonts.gstatic.com/' crossorigin></link>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
      </Helmet>
      <Seo />
      <ThemeProvider theme={theme}>
        <GlobalStyle noFocusOutline={noFocusOutline} />
        <Header overlay={overlayHeader} />
        <Main>{children}</Main>
        <Footer
          social={{
            twitterUrl,
            facebookUrl,
            instagramUrl,
            youtubeUrl,
            linkedinUrl,
            githubUrl,
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default Layout
