'use client'

import { Container, ImageCaption, Section, useTheme } from '@fcongson/lagom-ui'
import { FillImageBox } from 'components/FillImageBox'
import { Layout } from 'components/layouts'
import { ScrollProgress } from 'components/ScrollProgress'
import { resolveImagePath } from 'lib/image-utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const PostContent = styled.article`
  margin: 0 auto 0 auto;

  .lagom-container {
    max-width: ${(props) => props.theme.sizes!.maxWidthContent};
  }
`

const PostHeader = styled.header`
  h1 {
    padding-bottom: 2rem;
  }

  .back {
    color: var(--lagom-semantic-color-fg-subtle);
    display: block;
    max-width: ${(props) => props.theme.sizes!.maxWidthContainer};
    margin: 0 auto 2em auto;
    font-family: var(--lagom-core-font-families-sans-serif);
    font-size: 16px;

    &:before {
      content: '←';
      display: inline-block;
      position: relative;
      margin-right: 0.5rem;
    }

    a {
      color: var(--lagom-semantic-color-fg-subtle);
      font-weight: normal;
      padding-bottom: 0.25rem;
      border-bottom: 1px solid transparent;
      transition: border-bottom 200ms ease-in-out;

      &:hover {
        border-bottom: 1px solid var(--lagom-semantic-color-fg-subtle);
      }
    }
  }

  .lagom-container {
    margin-bottom: 2rem;
  }

  margin-bottom: 4rem;
`

const PostFooter = styled.footer`
  background-color: var(--lagom-semantic-color-bg-muted);

  .lagom-container {
    padding-top: 8rem;
    padding-bottom: 8rem;
    max-width: ${(props) => props.theme.sizes!.maxWidthContent};
    margin-bottom: 0;
  }

  a {
    color: var(--lagom-semantic-color-fg-muted);
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid var(--lagom-semantic-color-border-muted);
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid var(--lagom-semantic-color-border-default);
    }
  }
`

export const PostShell: React.FunctionComponent<{
  title?: string
  featuredImage?: string
  altText?: string
  imageCaption?: string
  children?: React.ReactNode
}> = ({ title, featuredImage, altText, imageCaption, children }) => {
  const theme = useTheme()
  const imagePath = resolveImagePath(featuredImage)

  return (
    <Layout>
      <ScrollProgress />
      <PostContent theme={theme}>
        <PostHeader theme={theme}>
          <Section>
            <Container>
              <div className='back'>
                <Link href='/blog/'>back to list</Link>
              </div>
              <h1>{title ? title : 'Untitled'}</h1>
            </Container>
          </Section>
          {!!imagePath && (
            <ImageCaption
              image={
                <FillImageBox $aspectRatio='16 / 9'>
                  <Image src={imagePath} alt={altText ?? title ?? ''} fill style={{ objectFit: 'cover' }} />
                </FillImageBox>
              }
              caption={imageCaption ?? ''}
            />
          )}
        </PostHeader>
        {children}
        <PostFooter theme={theme}>
          <Section>
            <Container>
              <h3>
                Thoughts? Send me a{' '}
                <a href='https://twitter.com/fcongson' target='_blank' rel='noopener noreferrer'>
                  tweet
                </a>
                !
              </h3>
            </Container>
          </Section>
        </PostFooter>
      </PostContent>
    </Layout>
  )
}
