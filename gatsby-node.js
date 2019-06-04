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

  const processCdnImages = async (nodes, prefix) => {
    await Promise.all(
      nodes.map(async img => {
        let fileNode
        try {
          fileNode = await createRemoteFileNode({
            url: toCdnUri(img.imageId),
            parentNodeId: node.id,
            store,
            cache,
            createNode,
            createNodeId,
          })
        } catch (e) {}
  
        if (fileNode) {
          createNodeField({
            node,
            name: `${prefix}Image_${nodes.indexOf(img)}___NODE`,
            value: fileNode.id,
          })
        }
      })
    )
  }

  await processCdnImages(heroImages, 'hero')
  await processCdnImages(discoverImages, 'discover')
  await processCdnImages(blogImages, 'blog')
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

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: landingPageTemplate,
      })
    })
  })
}
