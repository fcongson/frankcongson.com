import Img from 'gatsby-image'
import styled from 'styled-components'
import photography from '../../content/data/photography.json'
import Hero from '../components/Hero'
import Layout from '../components/layouts'
import SEO from '../components/SEO'
import { Container, PageHeader } from '../components/styles'
import { useImage } from '../utils/useImage'

const PhotographyContainer = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  width: 100vw;
  display: flex;
  flex-direction: row;
`

const PhotographyImage = styled.div`
  display: grid;
  align-items: center;
  padding: 0 2rem;
  scroll-snap-align: center;

  ${(props) => props.theme.mediaQueries.large} {
    padding: 0 1rem;
  }

  ${(props) => props.theme.mediaQueries.large} {
    min-height: 80vh;
  }

  ${(props) => props.theme.mediaQueries.small} {
    padding: 0 0.5rem;
  }

  ${Container} {
    display: flex;
    flex-direction: row;

    ${(props) => props.theme.mediaQueries.medium} {
      flex-direction: column-reverse;
    }
  }

  div.description {
    width: 140px;
    background-color: ${(props) => props.theme.colors.greys[0]};
    color: ${(props) => props.theme.colors.greys[4]};
    font-size: 36px;
    line-height: 44px;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    text-align: center;

    ${(props) => props.theme.mediaQueries.medium} {
      width: 100%;
      height: 64px;
      font-size: 24px;
      line-height: 29px;
      padding: 1rem;
    }
  }

  div.image {
    /* width = container width - description width - padding */
    width: calc(min(${(props) => props.theme.sizes.maxWidthContainer}, 80vw) - 140px - 1rem);
    margin: 0 0 0 1rem;

    ${(props) => props.theme.mediaQueries.medium} {
      width: 80vw;
      margin: 0 0 1rem 0;

      picture {
        object-position: center center;
      }
    }
  }
`

const Photography = () => {
  const getImage = useImage()
  const heroImage = getImage(photography.hero_image.image)
  const seoImage = getImage(photography.seo.image)
  const { seo, sections: images } = photography

  return (
    <Layout overlayHeader>
      <SEO
        title={seo?.title}
        desc={seo?.description}
        keywords={seo?.keywords.join(', ')}
        image={seoImage?.publicURL}
        pathname='/photography'
      />
      <Hero
        image={
          <Img
            fluid={heroImage.childImageSharp.fluid}
            alt={photography.hero_image.alt_text}
            style={{ height: '100%' }}
            imgStyle={{ opacity: 0.5 }}
          />
        }
        content={<PageHeader>{photography.page_header}</PageHeader>}
      />
      <PhotographyContainer>
        {images.map(({ image, alt_text, caption }, index) => {
          const imageSharp = getImage(image)
          return (
            <PhotographyImage key={image}>
              <Container>
                <div className='description'>
                  {index + 1} / {images.length}
                </div>
                <div className='image'>
                  <Img fluid={imageSharp.childImageSharp.fluid} alt={alt_text} />
                </div>
              </Container>
            </PhotographyImage>
          )
        })}
      </PhotographyContainer>
    </Layout>
  )
}

export default Photography
