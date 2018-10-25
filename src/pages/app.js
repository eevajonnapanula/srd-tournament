import React from "react"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import PrivateRoute from "../components/private-route"
import Index from '../components/index-container'
import Login from '../components/login'

const App = () => (
  <Layout>
    <Router>
      <PrivateRoute path="/app/" component={Index} />
      <Login path="/app/login" />
    </Router>
  </Layout>
)

export default App
