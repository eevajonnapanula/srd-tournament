import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import Form from 'grommet/components/Form'
import FormField from 'grommet/components/FormField'
import PasswordInput from 'grommet/components/PasswordInput'
import Button from 'grommet/components/Button'
import Box from 'grommet/components/Box'
import Toast from 'grommet/components/Toast';

import { handleLogin, isLoggedIn } from "../utils/auth"

class Login extends React.Component {
  state = {
    password: '',
    toast: false,
  }

  handlePasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  showToast() {
    this.setState({toast: true})
  }

  hideToast() {
    this.setState({toast: false})
  }

  async handleLogin(event) {
    event.preventDefault()

    try {
      const res = await handleLogin(this.state)
      !!res ? navigate(`app/`) : this.showToast()
    } catch (e) {
      console.log('error', e)
    }


  }

  render() {
    if (isLoggedIn()) {
      navigate(`app/`)
    }

    return (
        <Box direction="column" align="center" justify="center">
          {this.state.toast &&
            <Toast status='critical' onClose={() => this.hideToast()}>
            Kirjautuminen epäonnistui, yritä uudelleen
            </Toast>
          }
          <Form compact={true}>
            <FormField>
              <PasswordInput onChange={(e) => this.handlePasswordChange(e)} />
            </FormField>
            <Button label="Kirjaudu" onClick={(e) => this.handleLogin(e) } fill={true}/>
          </Form>
        </Box>
    )}
}

export default Login
