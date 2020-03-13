import { graphql, StaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../../stylesheets/main.scss'
import SEO from '../SEO'
import Footer from './Footer'
import Header from './Header'

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

const Layout = props => {
  const { site } = props.data
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
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
        <link
          href='https://fonts.googleapis.com/css?family=Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
        <body className={noFocusOutline ? 'no-focus-outline' : ''} />
        <meta name='viewport' content='width=device-width,minimum-scale=1.0,initial-scale=1.0,viewport-fit=cover' />
      </Helmet>
      <SEO />
      <Header />
      <main>{props.children}</main>
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
    </>
  )
}

export default props => <StaticQuery query={query} render={data => <Layout data={data} {...props} />} />
