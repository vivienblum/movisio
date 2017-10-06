import React from "react";
import { Link } from 'react-router'
import FontIcon from 'material-ui/FontIcon';
import {Footer} from "../../shared/footer";

export default function FooterMovisio() {
  // TODO set link to My movies
  return (
    <Footer>
      <div>
        <h3>Movisio</h3>
        <p>Application to manage both the movies you want to watch and the ones you have already watched.</p>
      </div>
      <div>
        <h3>Follow</h3>
        <Link to="/"><FontIcon className="muidocs-icon-action-home" /></Link>
        <Link to="https://www.linkedin.com/in/vivien-blum-944556b0/">LK</Link>
        <a href="https://www.youtube.com/channel/UCpK7GJCqeelL29fLWzCoQNg">YT</a>
        <a href="https://github.com/vivienblum">GT</a>
      </div>
    </Footer>
  )
}
