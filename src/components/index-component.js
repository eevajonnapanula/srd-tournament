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
    lang: 'fi'
  }
  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this)
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive)
    this.getData()
  }

  componentWillUnmount() {
    this._responsive.stop()
  }

  _onResponsive(small) {
    this.setState({ small })
  }

  getData() {
    const { edges } = this.props.data.allMarkdownRemark

    const data = edges.reduce((acc, currValue) => {
      acc[currValue.node.frontmatter.lang][currValue.node.frontmatter.key] = {title: currValue.node.frontmatter.title, html: currValue.node.html, key: currValue.node.frontmatter.key}
      return acc;
    }, {fi: {}, en: {}})

    this.setState({data})
  }

  changeSelected(key) {
    this.setState({ selected: key })
  }

  changeLanguage(lang) {
    this.setState({ lang })
  }

  render() {
    return (
    <Box justify="center" align="center">
      <Box style={{flexDirection: "row", justifyContent: 'space-around', width: '100%'}}>
        <Button label="Fi" primary={true} onClick={() => this.changeLanguage('fi')} />
        <Button label="En" primary={true} onClick={() => this.changeLanguage('en')} />
      </Box>
      <MenuComponent
        handleSelected={(item) => this.changeSelected(item)}
        data={this.state.data}
        small={this.state.small}
        language={this.state.lang}
      />
    {(this.state.data[this.state.lang] && this.state.data[this.state.lang][this.state.selected]) && <PageComponent page={this.state.data[this.state.lang][this.state.selected]}  />}
    </Box>
  )}
}

export default IndexComponent
