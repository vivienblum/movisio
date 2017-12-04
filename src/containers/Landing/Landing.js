import React, { Component } from "react"
import styled from "styled-components"
import { connect } from "../../stores"
import { FormSignIn } from "../../components/FormSignIn"
import { FormSignUp } from "../../components/FormSignUp"
import Theme from "../../styles/Theme"

const wallpapers = [
  "https://images.pexels.com/photos/4417/black-and-white-people-bar-men.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/6945/sunset-summer-golden-hour-paul-filitchkin.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/196666/pexels-photo-196666.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/442559/pexels-photo-442559.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/386025/pexels-photo-386025.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/380283/pexels-photo-380283.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/326410/pexels-photo-326410.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/78944/industrial-sunset-furnace-rooftop-78944.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/35600/road-sun-rays-path.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/7919/pexels-photo.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/161212/rio-de-janeiro-olympics-2016-niteroi-brazil-161212.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/66100/pexels-photo-66100.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/90412/pexels-photo-90412.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/100500/pexels-photo-100500.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/6440/magazines-desk-work-workspace.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/247932/pexels-photo-247932.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/458379/pexels-photo-458379.jpeg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/2990/vintage-old-film.jpg?w=940&h=650&auto=compress&cs=tinysrgb",
  "https://images.pexels.com/photos/261628/pexels-photo-261628.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
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
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15vh;
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
