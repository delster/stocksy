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

// Transform the Asset IDs into Queryable/Optimizable Asset URLs
exports.onCreateNode = async ({
  node,
  store,
  cache,
  createNodeId,
  actions,
}) => {
  if (node.internal.type !== 'MarkdownRemark') return

  const { createNode, createNodeField } = actions
  const heroImages = node.frontmatter.hero.gridImages
  const discoverImages = node.frontmatter.discover.discoverImages
  const blogImages = node.frontmatter.blog.posts

  const createCDNFileNode = async (name, url) => {
    fileNode = await createRemoteFileNode({
      url: url,
      parentNodeId: node.id,
      store,
      cache,
      createNode,
      createNodeId,
    })
    fileField = await createNodeField({
      node,
      name: name,
      value: fileNode.id,
    })
  }

  for await (img of heroImages) createCDNFileNode(`heroImage_${heroImages.indexOf(img)}___NODE`, toCdnUri(img.imageId))
  for await (img of discoverImages) createCDNFileNode(`discoverImage_${discoverImages.indexOf(img)}___NODE`, toCdnUri(img.imageId))
  for await (img of blogImages) createCDNFileNode(`blogImage_${blogImages.indexOf(img)}___NODE`, toCdnUri(img.imageId))
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
    if (result.errors) return Promise.reject(result.errors)

    /*
    fragment CDNImage on File {
      childImageSharp {
        fluid(maxWidth: 500) {
          src
        }
      }
    }
*/

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: landingPageTemplate,
      })
    })
  })
}
