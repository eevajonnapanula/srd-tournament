import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Label from 'grommet/components/Label'
import Anchor from 'grommet/components/Anchor'
import DeployIcon from 'grommet/components/icons/base/Deploy'

export default () => (
  <Footer justify="center">
    <Box direction='row'
      justify="center"
      pad={{"between": "medium"}}
      responsive={false}
      >
        <OutboundLink href='https://github.com/eevajonnapanula' style={{textDecoration: 'none'}} >
          <Box direction="row" justify="center" align="center" responsive={false} pad={{between: "small"}}>
            <DeployIcon colorIndex="brand" />
            <Label>Eevis</Label>
          </Box>
        </OutboundLink>
    </Box>
  </Footer>
)
