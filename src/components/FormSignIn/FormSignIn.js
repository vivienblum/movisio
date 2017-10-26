import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { connect } from "../../stores"

class FormSignIn extends Component {
  state = { username: "", password: "", errorText: "" }

  handleSignIn() {
    const { username, password } = this.state
    return this.props.userStore.login({ username, password }).catch(err => {
      // console.log(err.json)
      this.setState({ errorText: "No user found or wrong username" })
    })
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
    const { username, password, errorText } = this.state
    const valid = username !== "" && password !== ""
    return (
      <Form>
        <TitleForm>LOG IN</TitleForm>
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
        <ErrorText>{errorText}</ErrorText>
        <RaisedButton
          label="LOG IN"
          style={{}}
          disabled={!valid}
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

const ErrorText = styled.p`color: red;`
