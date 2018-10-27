import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import IndexComponent from './index-component'

export default () => (
  <StaticQuery
    query={graphql`
      query DataQuery {
        allMarkdownRemark( sort: {fields: [frontmatter___title], order: ASC}) {
          edges {
            node {
              id
              html
              frontmatter {
                title
                key
              }
            }
          }
        }
      }
    `}
    render={data => (
      <IndexComponent data={data} />
    )}
  />
)
