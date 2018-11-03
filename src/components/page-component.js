import React from 'react'

import Box from 'grommet/components/Box'
import Animate from 'grommet/components/Animate';

import Layout from './layout'

export default (props) => {
  return (
      <Animate enter={{"animation": "fade", "duration": 300, "delay": 0}}
        keep={true}>
        <Box pad="medium" justify="center" align="center">
          <div dangerouslySetInnerHTML={{ __html: props.page.html }} />
        </Box>
    </Animate>
  )
}
