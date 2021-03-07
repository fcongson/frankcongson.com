import { graphql, useStaticQuery } from 'gatsby'

const allImagesQuery = graphql`
  query allImagesQuery {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          absolutePath
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`

export const useImage = () => {
  const { allFile } = useStaticQuery(allImagesQuery)

  const getImage = (image) => {
    if (!image) return
    // get the filename from the path
    const filename = image.split('/').pop()
    return allFile.edges.find(({ node }) => node.absolutePath.split('/').pop() === filename).node
  }

  return getImage
}
