import React from 'react'
import { StaticQuery, Link, graphql } from "gatsby"

import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Button from 'grommet/components/Button'
import Columns from 'grommet/components/Columns'

import ButtonLink from './button-link'

export default ({direction, padding}) => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
      	  edges {
      	    node {
      	      id
              fields {
                slug
              }
              frontmatter {
                title
              }
      	    }
      	  }
      	}
      }
      `
    }
    render={data => (
      <Box style={{flexDirection: direction, flexWrap: "wrap"}} justify="center" padding={padding}>
        { data.allMarkdownRemark.edges.map(({ node }) => (
          <ButtonLink slug={node.fields.slug} title={node.frontmatter.title} />
         ))}
     </Box>
        )}
    />
)
