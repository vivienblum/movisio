import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()

export default class FormSignIn extends Component {
  state = { username: "", password: "" }

  handleSignIn() {
    // TODO post on login_token
  }

  handleUsernameChange(e) {
    const username = e.target.value
    this.setState({ username })
  }

  handlePasswordChange(e) {
    const password = e.target.value
    this.setState({ password })
  }

  render() {
    const { username, password } = this.state
    return (
      <Form>
        <TextField
          floatingLabelText="Username"
          onChange={this.handleUsernameChange.bind(this)}
          value={username}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          onChange={this.handlePasswordChange.bind(this)}
          value={password}
        />
        <RaisedButton label="Default" style={{}} onClick={this.handleSignUp} />
      </Form>
    )
  }
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`
