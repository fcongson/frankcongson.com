import { graphql, StaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import '../../stylesheets/main.scss'
import '../../stylesheets/resetr.css'
import SEO from '../SEO'
import theme from '../styles'
import Footer from './Footer'
import Header from './Header'

const GlobalStyle = createGlobalStyle`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: ${props => props.theme.colors.oliveLight40}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${props => props.theme.colors.oliveLight40}; /* Gecko Browsers */
  }

  html {
    .no-focus-outline a:focus,
    .no-focus-outline button:focus,
    .no-focus-outline div[role='button']:focus {
      outline: none;
    }
  }

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
    color: ${props => props.theme.colors.greyDark40};
    line-height: 1.7;
    font-family: ${props => props.theme.fonts.sansSerif};
    font-size: 16px;
  }

  /* typography */

  a {
    color: ${props => props.theme.colors.greyDark20};
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 2px 2px;
    background-position: 0 23px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${props => props.theme.fonts.sansSerif};
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 54px;
    font-weight: 700;
    line-height: 66px;
  }
  h2 {
    margin-bottom: 1rem;
    font-size: 36px;
    font-weight: 700;
    line-height: 44px;
  }
  h3 {
    margin-bottom: 1rem;
    font-size: 24px;
    font-weight: 700;
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

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletPortrait}) {
    h1 {
      font-size: 36px;
      line-height: 45px;
    }
    h2 {
      font-size: 24px;
    }
    h3 {
      font-size: 16px;
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

const query = graphql`
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

const Layout = ({ data, overlayHeader, children }) => {
  const { site } = data
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
        <body className={noFocusOutline ? 'no-focus-outline' : ''} />
        <meta name='viewport' content='width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover' />
        <link rel='preconnect' href='https://frankcongson.prismic.io' crossorigin></link>
        <link rel='preconnect' href='https://fonts.gstatic.com/' crossorigin></link>
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700|Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
      </Helmet>
      <SEO />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header overlay={overlayHeader} />
        <Main>{children}</Main>
        <Footer
          social={{
            twitterUrl,
            facebookUrl,
            instagramUrl,
            youtubeUrl,
            linkedinUrl,
            githubUrl
          }}
        />
      </ThemeProvider>
    </>
  )
}

export default props => <StaticQuery query={query} render={data => <Layout data={data} {...props} />} />
