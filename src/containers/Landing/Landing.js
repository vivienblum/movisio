import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "../../stores"
import { FormSignIn } from "../../components/FormSignIn"
import { FormSignUp } from "../../components/FormSignUp"
import Theme from "../../styles/Theme"

const wallpapers = [
  "https://images.pexels.com/photos/96106/pexels-photo-96106.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
]

class Landing extends Component {
  state = { image: null }

  componentWillMount() {
    const image = wallpapers[Math.floor(Math.random() * wallpapers.length)]
    this.setState({ image })
  }

  render() {
    const { image } = this.state
    return (
      <LandingContainer
        style={{
          backgroundImage: `url(${image})`
        }}
      >
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
  //background-image: url(${require("../../images/background_images/pexels-photo-66100.jpeg")});
  //background-image: url(https://images.pexels.com/photos/96106/pexels-photo-96106.jpeg?w=940&h=650&auto=compress&cs=tinysrgb);
  background-size: cover;
  background-attachment: fixed;
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
  background-color: ${Theme.whiteGrey};
`

const Separator = styled.div`
  background-color: ${Theme.lightGrey};
  width: 2px;
  border-radius: 5px;
`

const LogoImage = styled.img`height: 60vh;`
