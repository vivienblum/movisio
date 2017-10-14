import React from "react"
import { Link } from "react-router"
import styled from "styled-components"
import { Header } from "../../shared/header"

export default function HeaderMovisio() {
  // TODO set link to My movies
  return (
    <Header>
      <Link to="/">
        <LogoImage src={require("../../images/logos/movisio-logo-white.png")} />
      </Link>
      <Link to="/movies">All</Link>
      <Link to="/movies">My Movies</Link>
    </Header>
  )
}

const LogoImage = styled.img`width: 70px;`
