import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import CircularProgress from "material-ui/CircularProgress"
import { connect } from "../../stores"

class FormSignIn extends Component {
  state = {
    username: "",
    password: "",
    errorUsername: "",
    errorPassword: "",
    launching: false
  }

  handleSignIn() {
    const { username, password } = this.state
    this.setState({ launching: true })
    return this.props.userStore
      .login({ username, password })
      .catch(err => {
        if (err.status === 401) {
          this.setState({
            errorUsername: "No user found or wrong username",
            errorPassword: "No user found or wrong username"
          })
        }
      })
      .then(() => {
        this.setState({ launching: false })
      })
  }

  handleUsernameChange(e) {
    const username = e.target.value
    this.setState({ username, errorUsername: "", errorPassword: "" })
  }

  handlePasswordChange(e) {
    const password = e.target.value
    this.setState({ password, errorUsername: "", errorPassword: "" })
  }

  render() {
    const {
      username,
      password,
      errorUsername,
      errorPassword,
      launching
    } = this.state
    const valid = username !== "" && password.length >= 8
    return (
      <Form disabled>
        <TitleForm>LOG IN</TitleForm>
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
          errorText={errorPassword}
          disabled={launching}
          onChange={this.handlePasswordChange.bind(this)}
          value={password}
        />
        <RaisedButton
          label={launching ? <CircularProgress /> : "LOG IN"}
          style={{ marginTop: "15px" }}
          disabled={!valid || launching}
          onClick={this.handleSignIn.bind(this)}
        />
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  userStore: state.userStore
})
export default connect(mapStateToProps)(FormSignIn)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
`
const TitleForm = styled.h4``
