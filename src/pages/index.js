import React from 'react'
import { navigate } from "gatsby"
import Layout from '../components/layout'

class IndexPage extends React.Component {
  render() {
    if (typeof window !== `undefined`) {
      navigate(`app/login`)
    }
    return (
      <Layout />
  )}
}

export default IndexPage
