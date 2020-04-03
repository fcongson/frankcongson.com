import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { RichText } from 'prismic-reactjs'
import React from 'react'
import styled from 'styled-components'
import htmlSerializer from '../../utils/htmlSerializer'
import { linkResolver } from '../../utils/linkResolver'
import { Container, Section } from '../styles'

const FeaturedSectionContent = styled.div`
  .featured-image {
    width: 100%;
  }

  .featured-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .call-to-action {
    margin: 0 auto;
  }
`

export default ({ slice }) => {
  return (
    <FeaturedSectionContent>
      {!!slice.primary.section_imageSharp && (
        <Section>
          <Container>
            <div className='featured-image'>
              <Img
                fluid={slice.primary.section_imageSharp.childImageSharp.fluid}
                alt={slice.primary.section_image.alt}
              />
            </div>
          </Container>
        </Section>
      )}
      <Section>
        <Container>
          <div className='featured-container'>
            <h2 className='section-header'>
              {RichText.asText(slice.primary.section_header, linkResolver, htmlSerializer)}
            </h2>
            <p className='section-text'>{RichText.asText(slice.primary.section_text, linkResolver, htmlSerializer)}</p>
            <Link className='call-to-action button' to={`/${slice.primary.call_to_action._meta.uid}`}>
              {RichText.asText(slice.primary.call_to_action_text, linkResolver, htmlSerializer)}
            </Link>
          </div>
        </Container>
      </Section>
    </FeaturedSectionContent>
  )
}
