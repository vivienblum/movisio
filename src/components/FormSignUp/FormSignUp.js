import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import CircularProgress from "material-ui/CircularProgress"
import { connect } from "../../stores"

class FormSignUp extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    errorUsername: "",
    errorEmail: "",
    launching: false
  }

  handleSignUp() {
    const { username, password, email } = this.state
    this.setState({ launching: true })
    return this.props.userStore
      .signUp({ user: { username, password, email } })
      .catch(err => {
        switch (err.status) {
          case 420:
            this.setState({
              errorUsername: "Username already taken.",
              errorEmail: "Email already taken."
            })
            break
          case 421:
            this.setState({
              errorEmail: "Email already taken."
            })
            break
          case 422:
            this.setState({
              errorUsername: "Username already taken."
            })
            break
          default:
            break
        }
      })
      .then(() => {
        this.setState({ launching: false })
      })
  }

  handleUsernameChange(e) {
    const username = e.target.value
    this.setState({ username, errorUsername: "" })
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
    this.setState({ email, errorEmail: "" })
  }

  render() {
    const {
      username,
      password,
      confirmPassword,
      email,
      errorUsername,
      errorEmail,
      launching
    } = this.state
    const samePassword = password === confirmPassword
    const valid =
      username !== "" && password.length >= 8 && email !== "" && samePassword
    return (
      <Form>
        <TitleForm>SIGN UP</TitleForm>
        <TextField
          floatingLabelText="Username"
          errorText={errorUsername}
          disabled={launching}
          onChange={this.handleUsernameChange.bind(this)}
          value={username}
        />
        <TextField
          floatingLabelText="Password"
          type="password"
          disabled={launching}
          onChange={this.handlePasswordChange.bind(this)}
          value={password}
        />
        <TextField
          floatingLabelText="Confirm Password"
          type="password"
          errorText={!samePassword && "Passwords must be the same."}
          disabled={launching}
          onChange={this.handlePasswordConfirmationChange.bind(this)}
          value={confirmPassword}
        />
        <TextField
          floatingLabelText="Email"
          type="email"
          errorText={errorEmail}
          disabled={launching}
          onChange={this.handleEmailChange.bind(this)}
          value={email}
        />
        <RaisedButton
          label={launching ? <CircularProgress /> : "SIGN UP"}
          style={{ marginTop: "15px" }}
          disabled={!valid || launching}
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
