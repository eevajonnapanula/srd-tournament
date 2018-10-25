import React from 'react'
import { StaticQuery, graphql } from "gatsby"

import IndexComponent from './index-component'

export default () => (
  <StaticQuery
    query={graphql`
      query DataQuery {
        allMarkdownRemark {
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
