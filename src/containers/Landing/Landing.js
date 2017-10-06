import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "../../stores"

class Landing extends Component {
  handleLogin() {}

  render() {
    // this.props.userStore.login({
    //   username: 'margot',
    //   password: 'test'
    // })
    // this.props.userStore.all()
    // this.props.userStore.signUp({
    //   user : {
    //     username: 'margot',
    //     password: 'test',
    //     mail: 'test@test.com',
    //     image: '...'
    //   }
    // })
    return (
      <LandingContainer>
        <LogoImage src={require("../../images/logos/movisio-logo-black.png")} />
        <p>GET STARTED</p>
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
