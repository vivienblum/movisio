import React, { Component } from "react"
import styled from "styled-components"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { connect } from "../../stores"

class FormSignIn extends Component {
  state = { username: "", password: "", result: "" }

  handleSignIn() {
    const { username, password } = this.state
    this.props.userStore.login({ username, password })
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
    const { username, password, result } = this.state
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
        <Result>{result}</Result>
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

const Result = styled.p`color: red;`
