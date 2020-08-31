import * as Sentry from '@sentry/browser'
import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../../stylesheets/resetr.css'
import SEO from '../SEO'
import theme from '../styles'
import Footer from './Footer'
import Header from './Header'

Sentry.init({ dsn: process.env.SENTRY_DSN })

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: ${(props) => props.theme.colors.oliveLight40}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${(props) => props.theme.colors.oliveLight40}; /* Gecko Browsers */
  }

  ${(props) =>
    props.noFocusOutline &&
    `
    html {
      a:focus,
      button:focus,
      div[role='button']:focus {
        outline: none;
      }
    }
    `}

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    padding: 0;
    color: ${(props) => props.theme.colors.greyDark40};
    line-height: 1.7;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    font-size: 16px;
  }

  /* typography */

  @font-face {
    font-family: 'silkamono';
    src: url('/fonts/silkamono-regular-webfont.woff2') format('woff2');
  }

  a {
    color: ${(props) => props.theme.colors.greyDark40};
    text-decoration: none;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.oliveLight40};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.greyDark40};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.fonts.sansSerif};
    font-weight: 700;
    margin-bottom: 1rem;
    a {
      font-weight: inherit;
    }
  }
  h1 {
    font-size: 54px;
    line-height: 66px;
  }
  h2 {
    font-size: 36px;
    line-height: 44px;
  }
  h3 {
    font-size: 24px;
    line-height: 29px;
  }

  p,
  pre,
  ul,
  ol {
    margin-bottom: 2rem;
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul li,
  ol li {
    margin-left: 1em;
    margin-bottom: 1em;
  }

  code,
  pre {
    font-family: 'silkamono', monospace;
  }

  pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  /* todo remove this blockquote style in favor of the Quote component once Quote is mdx compatible */
  blockquote {
    margin-bottom: 2rem;
    padding-left: 1rem;
    border-left: 4px solid ${(props) => props.theme.colors.greyDark40};
    display: inline-block;
    font-family: ${(props) => props.theme.fonts.serif};
    font-style: italic;
    font-size: 24px;
    color: ${(props) => props.theme.colors.greyDark20};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      border-left: 2px solid ${(props) => props.theme.colors.greyDark40};
      font-size: 16px;
    }

    @media screen and (min-width: ${(props) => props.theme.layout.minWidthEmph}) {
      width: 130%;
      margin: 0 -15% 2rem -15%;
      font-size: 24px;
      padding-left: 2rem;
      border-left: 4px solid ${(props) => props.theme.colors.greyDark40};
    }

    & > :first-child:before {
      content: open-quote;
      font-family: ${(props) => props.theme.fonts.serif};
      font-size: 2em;
      line-height: 0.1em;
      margin-right: 0.25em;
      vertical-align: -0.4em;
    }

    & > :last-child:after {
      content: close-quote;
      font-family: ${(props) => props.theme.fonts.serif};
      font-size: 2em;
      line-height: 0.1em;
      margin-left: 0.025em;
      vertical-align: -0.4em;
    }

    & > :last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletPortrait}) {
    h1 {
      font-size: 36px;
      line-height: 44px;
    }
    h2 {
      font-size: 24px;
      line-height: 29px;
    }
    h3 {
      font-size: 16px;
      line-height: 1.7;
    }
    p {
      font-size: 16px;
    }
    pre {
      font-size: 16px;
    }
  }
`

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
      <SEO />
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
