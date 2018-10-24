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

export default class Layout extends React.Component {
   constructor() {
     super();
     this._onResponsive = this._onResponsive.bind(this);
     this.state = {};
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
              <Columns maxCount={2} >
                <Menu direction={this.state.small ? "row" : "column"} />
                <Box pad="small" size={{width: "full"}}>
                  {this.props.children}
                </Box>
              </Columns>
            </Box>
          </App>
        )
  }
}
