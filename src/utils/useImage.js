import { graphql, useStaticQuery } from 'gatsby'

const allImagesQuery = graphql`
  query allImagesQuery {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          absolutePath
          publicURL
          childImageSharp {
            fluid(maxWidth: 1120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
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
    return allFile.edges.find(({ node }) => node.absolutePath.includes(filename)).node
  }

  return getImage
}
