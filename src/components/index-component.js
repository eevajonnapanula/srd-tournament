import React from 'react'
import { graphql } from "gatsby"

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Responsive from 'grommet/utils/Responsive'

import PageComponent from './page-component'
import MenuComponent from './menu'

class IndexComponent extends React.Component {
  state = {
    data: {},
    selected: 'schedule',
  }
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this)
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
    this.getData();
  }

  componentWillUnmount() {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

  getData() {
    const { edges } = this.props.data.allMarkdownRemark

    const data = edges.reduce((acc, currValue) => {
      acc[currValue.node.frontmatter.key] = {title: currValue.node.frontmatter.title, html: currValue.node.html, key: currValue.node.frontmatter.key}
      return acc;
    }, {})

    this.setState({ data })
  }

  changeSelected(key) {
    this.setState({ selected: key })
  }

  render() {
    return (
    <Box justify="center" align="center">
      <MenuComponent
        handleSelected={(item) => this.changeSelected(item)}
        data={this.state.data}
        small={this.state.small}
      />
      {this.state.data[this.state.selected] && <PageComponent page={this.state.data[this.state.selected]}  />}
    </Box>
  )}
}

export default IndexComponent
