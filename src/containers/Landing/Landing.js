import React, { Component } from "react"
import { connect } from "../../stores"
// import config from "../config"
import styled from "styled-components"

class Landing extends Component {
  handleLogin() {}

  componentWillMount() {
    this.props.userStore.login({
      username: "margot",
      password: "test"
    })
    // this.props.userStore.test()
    //   $.get({
    //    url: `${config.MOVISIO_API}/movies`
    //  })
  }

  componentDidMount() {
    this.props.userStore.initialize()
    // this.props.userStore.all()
  }

  render() {
    // this.props.userStore
    //   .login({
    //     username: "margot",
    //     password: "test"
    //   })
    // this.props.userStore.all()
    // this.props.userStore.signUp({
    //   user : {
    //     username: 'margot',
    //     password: 'test',
    //     email: 'test@test.com',
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
