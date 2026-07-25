import { graphql, useStaticQuery } from 'gatsby'
import { All_ImagesQuery, File, ImageSharp, Maybe } from 'graphql-types'

const ALL_IMAGES_QUERY = graphql`
  query ALL_IMAGES {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)|(gif)/" } }) {
      edges {
        node {
          absolutePath
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
          extension
        }
      }
    }
  }
`

export type ImageNode = Pick<File, 'absolutePath' | 'publicURL' | 'extension'> & {
  childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>>
}

export const useImage = () => {
  const { allFile } = useStaticQuery<All_ImagesQuery>(ALL_IMAGES_QUERY)

  const getImage = (image?: string): ImageNode | undefined => {
    if (!image) return
    // get the filename from the path
    const filename = image.split('/').pop()
    return allFile.edges.find(({ node }) => node.absolutePath.split('/').pop() === filename)?.node
  }

  return getImage
}
