import React from "react";
import { Link } from 'react-router'
import {Header} from "../../shared/header";

export default function HeaderMovisio() {
  // TODO set link to My movies
  return (
    <Header>
      <Link to="/">Movisio</Link>
      <Link to="/movies">All</Link>
      <Link to="/movies">My Movies</Link>
    </Header>
  )
}
