import React from "react"
import "./styles/Header.scss"

export default function Header({children}) {
  return (
    <header>
      {React.Children.map(children, child => {
          return React.cloneElement(<div className="header-item">{child}</div>)
        })}
    </header>
  )
}
