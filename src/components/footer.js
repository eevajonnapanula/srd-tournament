import React from 'react'
import Footer from 'grommet/components/Footer'
import Box from 'grommet/components/Box'
import Paragraph from 'grommet/components/Paragraph'
import Menu from 'grommet/components/Menu'
import Anchor from 'grommet/components/Anchor'
import Diamond from 'grommet/components/icons/base/Diamond'

export default () => (
  <Footer justify="center">
    <Box direction='row'
      justify="center"
      pad={{"between": "medium"}}
      responsive={false}
      >
      <Paragraph margin='none'>
        <Anchor href='https://github.com/eevajonnapanula' primary={true} icon={<Diamond />} >Eevis</Anchor>
      </Paragraph>
    </Box>
  </Footer>
)
