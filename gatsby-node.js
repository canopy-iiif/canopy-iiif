const fetch = require("node-fetch")
const axios = require("axios")
const slugify = require("slugify")
const path = require(`path`)
const merge = require("lodash/merge")
const { createFilePath } = require(`gatsby-source-filesystem`)

/*
 * Set root IIIF Collection conforming to specification
 * at https://iiif.io/api/presentation/3.0/#51-collection
 */
const rootCollection =
  "https://digital.lib.utk.edu/static/iiif/collections/rfta_completed.json"

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
  graphql,
}) => {
  const { createNode } = actions

  const response = await fetch(rootCollection)
  const json = await response.json()
  const { items = [] } = json

  const manifests = await chunks(
    items,
    async manifest => {
      const { id } = manifest
      return axios.get(id).then(result => result.data)
    },
    25
  )

  let metadataNodes = {}

  manifests.forEach((node, index) => {
    node.manifestId = node.id

    node.slug = `object/${slugify(
      node.label.en[0].replace("Interview with ", ""),
      {
        replacement: "-",
        lower: true,
        strict: true,
        trim: true,
      }
    )}`

    node.transcripts = ((items, transcripts = []) => {
      if (Array.isArray(items)) {
        items[0].items[0].items.map(function (element) {
          if (
            element.motivation === "supplementing" &&
            element.body[0].format === "text/vtt"
          ) {
            transcripts.push(element.body[0])
          }
        })
      }
      return transcripts
    })(node.items)

    let nodeId = createNodeId(`Manifests-${node.id}`)

    createNode({
      ...node,
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: "Manifests",
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node),
      },
    })

    let metadata = {}

    for (const element of node.metadata) {
      let slug = `browse/${slugify(element.label.en[0], {
        replacement: "-",
        lower: true,
        strict: true,
        trim: true,
      })}`

      metadata[slug] = {}
      metadata[slug].slug = slug
      metadata[slug].label = element.label.en[0]

      metadata[slug].values = {}

      for (const string of element.value.en) {
        let valueSlug = slugify(string, {
          replacement: "_",
          lower: true,
          strict: true,
          trim: true,
        })
        metadata[slug].values[valueSlug] = {}
        metadata[slug].values[valueSlug].slug = valueSlug
        metadata[slug].values[valueSlug].label = string
        metadata[slug].values[valueSlug].manifests = {}
        metadata[slug].values[valueSlug].manifests[nodeId] = {
          id: nodeId,
          slug: node.slug,
          manifestId: node.manifestId,
          label: node.label,
          summary: node.summary,
          thumbnail: node.thumbnail,
        }
      }
    }

    merge(metadataNodes, metadata)
  })

  for (const property in metadataNodes) {
    const metadata = metadataNodes[property]
    createNode({
      slug: metadata.slug,
      label: metadata.label,
      values: tidyObjectArrays(metadata.values),
      id: createNodeId(`Metadata-${metadata.slug}`),
      parent: null,
      children: [],
      internal: {
        type: "Metadata",
        content: JSON.stringify(metadata),
        contentDigest: createContentDigest(metadata),
      },
    })
  }
}

tidyObjectArrays = values => {
  return Object.keys(values).map(valueSlug => {
    values[valueSlug].manifests = Object.keys(values[valueSlug].manifests).map(
      nodeId => {
        return values[valueSlug].manifests[nodeId]
      }
    )
    return values[valueSlug]
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

/*
 * Embedded axios based request handlers
 */
function all(items, fn) {
  const promises = items.map(item => fn(item))
  return Promise.all(promises)
}

function series(items, fn) {
  let result = []
  return items
    .reduce((acc, item) => {
      acc = acc.then(() => {
        return fn(item).then(res => result.push(res))
      })
      return acc
    }, Promise.resolve())
    .then(() => result)
}

function splitToChunks(items, chunkSize = 50) {
  const result = []
  for (let i = 0; i < items.length; i += chunkSize) {
    result.push(items.slice(i, i + chunkSize))
  }
  return result
}

function chunks(items, fn, chunkSize = 50) {
  let result = []
  const chunks = splitToChunks(items, chunkSize)
  return series(chunks, chunk => {
    return all(chunk, fn).then(res => (result = result.concat(res)))
  }).then(() => result)
}
