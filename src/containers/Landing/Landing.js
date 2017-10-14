import React, { Component } from "react"
import { connect } from "../../stores"
import { FormSignIn } from "../../components/FormSignIn"
import { FormSignUp } from "../../components/FormSignUp"
import Theme from "../../styles/Theme"
// import config from "../config"
import styled from "styled-components"

class Landing extends Component {
  render() {
    return (
      <LandingContainer>
        <LogoImage src={require("../../images/logos/movisio-logo-black.png")} />
        <SignContainer>
          <FormSignIn />
          <Separator />
          <FormSignUp />
        </SignContainer>
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

const SignContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid #ddd;
  box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
    rgba(0, 0, 0, 0.117647) 0px 3px 4px;
  margin: 10px;
  padding: 10px;
`

const Separator = styled.div`
  background-color: ${Theme.grey300};
  width: 2px;
  border-radius: 5px;
`

const LogoImage = styled.img`height: 60vh;`
