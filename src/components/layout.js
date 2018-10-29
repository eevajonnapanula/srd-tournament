import React from 'react'
import PropTypes from 'prop-types'

// Grommet
import App from 'grommet/components/App'
import Box from 'grommet/components/Box'
import Responsive from 'grommet/utils/Responsive'
import Columns from 'grommet/components/Columns'

// Styles
import '../scss/main.scss'

// Components
import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {
  state = {}

  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  render() {
    return (
      <App inline={true}>
        <Box pad="medium" size={{width: "full"}}>
          <Header small={this.state.small} />
          <Box pad="small" size={{width: "full"}}>
            {this.props.children}
          </Box>
          </Box>
        <Footer />
      </App>
    )
  }
}
