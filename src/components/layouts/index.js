import { graphql, StaticQuery } from 'gatsby'
import React, { Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import '../../stylesheets/main.scss'
import Footer from './Footer'
import Header from './Header'

export default props => (
  <StaticQuery
    query={graphql`
      query SiteQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            author
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

const Layout = props => {
  const [noFocusOutline, setNoFocusOutline] = useState(true)

  // Define the meta title, description, keywords, and author
  const { title, description, keywords, author } = props.data.site.siteMetadata

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

  // Load the Prismic edit button
  if (typeof window !== 'undefined' && window.prismic) {
    window.prismic.setupEditButton()
  }

  return (
    <Fragment>
      <Helmet>
        <meta charSet='utf-8' />
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <link
          href='https://fonts.googleapis.com/css?family=Montserrat:400,600,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
        <link
          href='https://fonts.googleapis.com/css?family=Domine:400,700&display=swap'
          rel='stylesheet'
          type='text/css'></link>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'></link>
        <body className={noFocusOutline ? 'no-focus-outline' : ''} />
      </Helmet>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  )
}
