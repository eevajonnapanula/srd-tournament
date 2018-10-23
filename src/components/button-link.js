import React from 'react'
import { navigate } from "gatsby"

import Box from 'grommet/components/Box'
import Button from 'grommet/components/Button';


export default ({ slug, title }) => (
  <Box pad="small" size="small">
      <Button
        label={title}
        onClick={() => navigate(`/${slug}`)}
        primary={false}
        />
  </Box>
)
