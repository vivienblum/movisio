import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { connect } from "../../stores"

class FormSignUp extends Component {
  state = { username: "", password: "", confirmPassword: "", email: "" }

  handleSignUp() {
    const { username, password, email } = this.state
    this.props.userStore.signUp({ user: { username, password, email } })
  }

  handleUsernameChange(e) {
    const username = e.target.value
    this.setState({ username })
  }

  handlePasswordChange(e) {
    const password = e.target.value
    this.setState({ password })
  }

  handlePasswordConfirmationChange(e) {
    const confirmPassword = e.target.value
    this.setState({ confirmPassword })
  }

  handleEmailChange(e) {
    const email = e.target.value
    this.setState({ email })
  }

  render() {
    const { username, password, confirmPassword, email } = this.state
    const samePassword = password === confirmPassword
    const valid =
      username !== "" && password !== "" && email !== "" && samePassword
    return (
      <Form>
        <TitleForm>SIGN UP</TitleForm>
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
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          errorText={!samePassword && "Passwords must be the same."}
          onChange={this.handlePasswordConfirmationChange.bind(this)}
          value={confirmPassword}
        />
        <TextField
          floatingLabelText="Email"
          type="email"
          onChange={this.handleEmailChange.bind(this)}
          value={email}
        />
        <RaisedButton
          label="SIGN UP"
          style={{}}
          disabled={!valid}
          onClick={this.handleSignUp.bind(this)}
        />
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  userStore: state.userStore
})
export default connect(mapStateToProps)(FormSignUp)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const TitleForm = styled.h4``
