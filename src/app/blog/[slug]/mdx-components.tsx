'use client'

import { Container, ImageCaption, Quote, Section } from '@fcongson/lagom-ui'
import { renderCaption } from 'components/CaptionText'
import { FillImageBox } from 'components/FillImageBox'
import { NextLinkAdapter } from 'components/NextLinkAdapter'
import { isGif, resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MdxImage: React.FunctionComponent<{ src?: string; alt?: string }> = ({ src, alt }) => {
  const resolved = resolveImagePath(src)
  if (!resolved) return null
  return (
    <ImageCaption
      image={
        isGif(src) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolved} alt={alt} />
        ) : (
          <FillImageBox $aspectRatio='16 / 9'>
            <Image src={resolved} alt={alt ?? ''} fill style={{ objectFit: 'cover' }} />
          </FillImageBox>
        )
      }
    />
  )
}

const MdxImageCaption: React.FunctionComponent<{
  image: string
  altText?: string
  caption?: string
  emphasized?: boolean
  fullwidth?: boolean
  aspectRatio?: string
  maxWidth?: string
}> = ({ image, altText, caption, emphasized, fullwidth, aspectRatio, maxWidth }) => {
  const resolved = resolveImagePath(image)
  if (!resolved) return null
  return (
    <ImageCaption
      emphasized={emphasized}
      fullwidth={fullwidth}
      // lagom-ui types `caption` as a string but renders it as children, so links in it work.
      caption={renderCaption(caption) as string}
      image={
        isGif(image) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resolved} alt={altText} />
        ) : (
          <div style={maxWidth ? { maxWidth, margin: '0 auto' } : undefined}>
            {aspectRatio ? (
              <FillImageBox $aspectRatio={aspectRatio}>
                <Image src={resolved} alt={altText ?? ''} fill style={{ objectFit: 'cover' }} />
              </FillImageBox>
            ) : (
              <Image
                src={resolved}
                alt={altText ?? ''}
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            )}
          </div>
        )
      }
    />
  )
}

const internalDomain = 'https://frankcongson.com'

const MdxLink: React.FunctionComponent<{ href?: string; children?: React.ReactNode }> = ({ href, children }) => {
  if (href?.startsWith(internalDomain)) {
    return <Link href={href.replace(internalDomain, '')}>{children}</Link>
  }
  return (
    <a href={href} target={href?.startsWith('http') ? '_blank' : undefined} rel='noopener noreferrer'>
      {children}
    </a>
  )
}

// Exported as individual named client components rather than one grouped
// object: a 'use client' file can only act as a valid boundary for component
// references. A plain object of components exported from here resolves to
// an empty stub when imported into a Server Component (like the MDX post
// page), silently breaking every custom tag. Server code should import
// these directly and build the `components` map for MDXRemote itself.
export const MdxSection: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <Section>
    <Container>{children}</Container>
  </Section>
)

// MDX content historically used Gatsby's <Link to="..."> convention directly
// as a JSX tag (matching Gatsby's Link component's `to` prop). NextLinkAdapter
// bridges that to next/link's `href` prop.
export { MdxImage, MdxImageCaption, MdxLink, Quote as MdxBlockquote, NextLinkAdapter as MdxLinkComponent }
