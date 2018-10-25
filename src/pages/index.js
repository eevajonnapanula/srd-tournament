import React from 'react'
import { navigate } from "@reach/router"
import Layout from '../components/layout'

class IndexPage extends React.Component {

  render() {
    navigate(`app/`)
    return (
    <Layout>

    </Layout>
  )}
}

export default IndexPage
