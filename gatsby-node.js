const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const landingPageTemplate = path.resolve(`src/templates/lpTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
              description
              hero {
                heading
                copy
                gridImages {
                  imageId
                  altText
                }
              }
              discover {
                label
                heading
                copy
                discoverImages {
                  imageId
                  altText
                  captionLinkText
                  captionLinkUrl
                }
              }
              blog {
                label
                heading
                posts {
                  imageId
                  linkText
                  linkUrl
                }
              }
              search {
                heading
              }
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: landingPageTemplate,
      })
    })
  })
}
