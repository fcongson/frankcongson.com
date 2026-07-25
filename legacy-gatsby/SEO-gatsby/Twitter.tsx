import React from 'react'
import { Helmet } from 'react-helmet'

export const Twitter: React.FunctionComponent<{
  type?: string
  username?: string
  title: string
  desc: string
  image: string
  imageAlt: string
}> = ({ type = 'summary_large_image', username, title, desc, image, imageAlt }) => (
  <Helmet>
    {username && <meta name='twitter:creator' content={username} />}
    <meta name='twitter:card' content={type} />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={desc} />
    <meta name='twitter:image' content={image} />
    <meta name='twitter:image:alt' content={imageAlt} />
  </Helmet>
)
