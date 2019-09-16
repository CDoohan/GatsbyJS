import React, { Component } from "react"
import { graphql } from "gatsby"
import Layout from '../components/layout';
// import PostIcons from "../components/post-icons"
// import Layout from "../layouts"

// import { rhythm } from "../utils/typography"

class IndexTemplate extends Component {
  render() {
    // const currentPage = this.props.data.wordpressPage

    return (
      <Layout>
        <h1>Teste Index.js</h1>
      </Layout>
    )
  }
}

export default IndexTemplate

// export const pageQuery = graphql`
//   query currentPageQuery($id: String!) {
//     wordpressPage(id: { eq: $id }) {
//       title
//       content
//       date(formatString: "MMMM DD, YYYY")
//     }
//     site {
//       id
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
