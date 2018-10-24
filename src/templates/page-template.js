import React from 'react'
import { graphql } from "gatsby"

import Box from 'grommet/components/Box'
import Animate from 'grommet/components/Animate';

import Layout from '../components/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Animate enter={{"animation": "fade", "duration": 300, "delay": 0}}
      keep={true}>
        <Box pad="medium">
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
    </Animate>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
