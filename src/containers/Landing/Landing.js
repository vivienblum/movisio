import React, { Component } from "react"
import { connect } from "../../stores"
import { FormSignIn } from "../../components/FormSignIn"
// import config from "../config"
import styled from "styled-components"

class Landing extends Component {
  handleLogin() {}

  componentWillMount() {
    this.props.userStore.login({
      username: "margot",
      password: "test"
    })
  }

  render() {
    return (
      <LandingContainer>
        <LogoImage src={require("../../images/logos/movisio-logo-black.png")} />
        <p>GET STARTED</p>
        <FormSignIn />
      </LandingContainer>
    )
  }
}

const mapStateToProps = state => ({
  userStore: state.userStore
})
export default connect(mapStateToProps)(Landing)

const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LogoImage = styled.img`height: 60vh;`
