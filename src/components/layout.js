import React from 'react'
import PropTypes from 'prop-types'

// Grommet
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Responsive from 'grommet/utils/Responsive'
import Columns from 'grommet/components/Columns';

// Styles
import '../scss/main.scss'

// Components
import Header from '../components/header'
import Menu from '../components/menu'

export default ({ children, location }) =>  (
      <App>
        <Box pad="medium">
          <Header />
          <Columns maxCount={2} responsive={true}>
            <Menu />
            <Box>
              {children}
            </Box>
          </Columns>
        </Box>
      </App>
    )
