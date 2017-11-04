import React from "react"
import "./styles/Footer.scss"

export default function Footer({ children }) {
  return (
    <footer>
      {React.Children.map(children, child => {
        return React.cloneElement(<div className="footer-item">{child}</div>)
      })}
    </footer>
  )
}
