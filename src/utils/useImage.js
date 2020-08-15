import { graphql, useStaticQuery } from 'gatsby'

const allImagesQuery = graphql`
  query allImages {
    allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
      edges {
        node {
          absolutePath
          publicURL
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export const useImage = () => {
  const data = useStaticQuery(allImagesQuery)

  const getImage = (image) =>
    !image ? null : data.allFile.edges.find(({ node }) => node.absolutePath.includes(image)).node

  return getImage
}
