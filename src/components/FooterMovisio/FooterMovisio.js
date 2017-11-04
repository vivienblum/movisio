import React from "react"
import { Link } from "react-router"
import { Footer } from "../../shared/footer"
import FaLinkedinSquare from "react-icons/lib/fa/linkedin-square"
import FaYoutubeSquare from "react-icons/lib/fa/youtube-square"
import TiSocialGithubCircular from "react-icons/lib/ti/social-github-circular"

export default function FooterMovisio() {
  return (
    <Footer>
      <div>
        <h3>Movisio</h3>
        <p>
          Application to manage both the movies you want to watch and the ones
          you have already watched.
        </p>
      </div>
      <div>
        <h3>Follow</h3>
        <Link to="https://www.linkedin.com/in/vivien-blum-944556b0/">
          <FaLinkedinSquare />
        </Link>
        <a href="https://www.youtube.com/channel/UCpK7GJCqeelL29fLWzCoQNg">
          <FaYoutubeSquare />
        </a>
        <a href="https://github.com/vivienblum">
          <TiSocialGithubCircular />
        </a>
      </div>
    </Footer>
  )
}
