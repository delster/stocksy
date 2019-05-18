const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const path = require('path')

// ************************************
// START: Asset ID => Asset URL Functions
const key = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const toBase62 = assetId => {
  let d = assetId
  let arr = []
  while (d) {
    arr.push(key[d % 62])
    d = Math.floor(d / 62)
  }
  return arr.join('').padEnd(6, '0')
}
const toCdnUri = assetId =>
  `https://c.stocksy.com/a/${toBase62(assetId)}/z9/${assetId}.jpg`
// END: Asset ID => Asset URL Functions
// ************************************

// Add the Asset URLs to the GraphQL Schema
exports.onCreateNode = async ({
  actions,
  createNodeId,
  node,
  store,
  cache,
}) => {
  // Only do this transform on Markdown Files.
  if (node.internal.type !== `MarkdownRemark`) return

  // Destructure the API for Creating Custom Fields on Nodes.
  const { createNode, createNodeField } = actions

  // Convert an array from NetlifyCMS to custom image fields.
  const arrToFields = async (fieldArr, fieldName) => {
    // Loop over the array of asset IDs.
    for (const field of fieldArr) {
      let fileNode

      try {
        // Create Remote File Node from the fetched CDN image.
        fileNode = await createRemoteFileNode({
          url: toCdnUri(field.imageId),
          parentNodeId: node.id,
          store,
          cache,
          createNode,
          createNodeId,
          name: `${fieldName}_${fieldArr.indexOf(field)}`,
        })

        // Add the CDN image as a field on the original Markdown node.
        await createNodeField({
          node,
          name: `${fieldName}_${fieldArr.indexOf(field)}___NODE`,
          value: fileNode.id,
        })
      } catch (e) {
        // TODO: Remove this debug, which logs any errors in this process.
        console.log(`Error: ${e}`)
      }
    }
  }

  // Convert the NetlifyCMS Image ID Arrays into CDN Image Arrays
  arrToFields(node.frontmatter.hero.gridImages, 'heroGridImages')
  arrToFields(node.frontmatter.discover.discoverImages, 'discoverImages')
  arrToFields(node.frontmatter.blog.posts, 'blogPostImages')
}

// Create the Landing Pages
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const landingPageTemplate = path.resolve(`src/templates/lpTemplate.js`)

  await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              blogPostImages_0 {
                ...CDNImage
              }
              blogPostImages_1 {
                ...CDNImage
              }
              discoverImages_0 {
                ...CDNImage
              }
              discoverImages_1 {
                ...CDNImage
              }
              discoverImages_2 {
                ...CDNImage
              }
              discoverImages_3 {
                ...CDNImage
              }
              heroGridImages_0 {
                ...CDNImage
              }
              heroGridImages_1 {
                ...CDNImage
              }
              heroGridImages_2 {
                ...CDNImage
              }
              heroGridImages_3 {
                ...CDNImage
              }
              heroGridImages_4 {
                ...CDNImage
              }
              heroGridImages_5 {
                ...CDNImage
              }
              heroGridImages_6 {
                ...CDNImage
              }
              heroGridImages_7 {
                ...CDNImage
              }
              heroGridImages_8 {
                ...CDNImage
              }
            }
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
    fragment CDNImage on File {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
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
