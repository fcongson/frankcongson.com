import { graphql, useStaticQuery } from 'gatsby'

export const useImageSharp = () => {
  const data = useStaticQuery(graphql`
    query allImages {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            absolutePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const getImageSharp = (image) =>
    !image ? null : data.allFile.edges.find(({ node }) => node.absolutePath.includes(image)).node

  return getImageSharp
}
