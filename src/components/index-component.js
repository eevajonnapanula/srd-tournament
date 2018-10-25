import React from 'react'
import { graphql } from "gatsby"

import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Responsive from 'grommet/utils/Responsive'

import PageComponent from './page-component'

class IndexComponent extends React.Component {
  state = {
    data: {},
    selected: 'food',
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
    <Box>
      <Box style={{flexDirection: 'row', flexWrap: "wrap"}} justify="center">
      {Object.keys(this.state.data).map(item => (
        <Box pad="small" size="small" key={item}>
          <Button
            label={this.state.data[item].title}
            primary={true}
            onClick={() => this.changeSelected(item)}
            pad="small"
            size="small" />
        </Box>
      ))}
      </Box>
      {this.state.data[this.state.selected] && <PageComponent page={this.state.data[this.state.selected]}  />}
    </Box>
  )}
}

export default IndexComponent
