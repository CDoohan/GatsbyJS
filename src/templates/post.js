import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import Img from "gatsby-image"

class PostTemplate extends Component {
  render() {
    const post = this.props.data.wordpressPost
    const resolutions = this.props.data.wordpressPost.featured_media.localFile
      .childImageSharp.resolutions
    console.log(post)

    return (
      <Layout>
        <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
        {resolutions && (
          <div>
            <Img resolutions={resolutions} />
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      content
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 300, height: 300) {
              src
              width
              height
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
