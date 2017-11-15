import React, { Component } from "react"
import { Link } from "react-router"
import styled from "styled-components"
import { asReactiveLoader } from "mobx-models/reactiveLoader"
import MdPowerSettingsNew from "react-icons/lib/md/power-settings-new"

import { connect } from "../../stores"

import { Header } from "../../shared/header"

const HeaderMovisio = asReactiveLoader(
  class HeaderMovisio extends Component {
    handleLogout() {
      this.props.user.logout()
    }

    render() {
      const { user } = this.props
      return (
        <Header>
          <LeftContainer>
            <Link to="/movies" className="header-item">
              <LogoImage
                src={require("../../images/logos/movisio-logo-white.png")}
              />
            </Link>
          </LeftContainer>
          <RightContainer>
            <span className="header-item">{user.username}</span>
            <span
              onClick={this.handleLogout.bind(this)}
              className="header-item"
            >
              {<MdPowerSettingsNew />}
            </span>
          </RightContainer>
        </Header>
      )
    }
  }
)
const mapStateToProps = ({ userStore }) => {
  return {
    user: userStore.user
  }
}
export default connect(mapStateToProps)(HeaderMovisio)
const LogoImage = styled.img`width: 70px;`
const LeftContainer = styled.div`
  display: flex;
  align-items: center;
`
const RightContainer = styled.div`display: flex;`
