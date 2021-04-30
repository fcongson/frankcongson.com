import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Query } from '../../../graphql-types'
import { Facebook } from './Facebook'
import { Twitter } from './Twitter'

// Complete tutorial: https://www.gatsbyjs.org/docs/add-seo-component/

const SEO_QUERY = graphql`
  query SEO {
    site {
      buildTime(formatString: "YYYY-MM-DD")
      siteMetadata {
        siteUrl
        title
        description
        keywords
        image
        headline
        siteLanguage
        siteLocale
        author
        twitter
        facebook
      }
    }
  }
`

export const SEO: React.FunctionComponent<{
  title?: string
  desc?: string
  keywords?: string
  image?: string
  pathname?: string
  article?: boolean
}> = ({ title, desc, keywords, image, pathname, article = false }) => {
  const { site } = useStaticQuery<Query>(SEO_QUERY)

  const buildTime = site?.buildTime
  const {
    siteUrl,
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    image: defaultImage,
    headline,
    siteLanguage,
    siteLocale,
    author,
    twitter,
    facebook,
  } = site?.siteMetadata ?? {}

  const seo = {
    title: `${title ? `${title} - ` : ''}${defaultTitle}`,
    description: desc || defaultDescription,
    keywords: keywords || defaultKeywords,
    author: author,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname || ''}`,
  }

  // schema.org in JSONLD format
  // https://developers.google.com/search/docs/guides/intro-structured-data
  // You can fill out the 'author', 'creator' with more data or another type (e.g. 'Organization')

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author,
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author,
    },
    copyrightYear: `${new Date().getFullYear()}`,
    creator: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Person',
      name: author,
    },
    datePublished: '2020-02-28T00:00:00+13:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultImage}`,
    },
  }

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage ?? ''} />
        <meta name='description' content={seo.description ?? ''} />
        <meta name='keywords' content={seo.keywords ?? ''} />
        <meta name='author' content={seo.author ?? ''} />
        <meta name='image' content={seo.image} />
        <script type='application/ld+json'>{JSON.stringify(schemaOrgWebPage)}</script>
      </Helmet>
      <Facebook
        desc={seo.description ?? ''}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={siteLocale ?? ''}
        name={facebook ?? ''}
      />
      <Twitter title={seo.title} image={seo.image} desc={seo.description ?? ''} username={twitter ?? ''} />
    </>
  )
}
