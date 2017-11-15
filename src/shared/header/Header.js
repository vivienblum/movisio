import React from "react"

export default function Header({ children }) {
  return (
    <header>
      {React.Children.map(children, child => {
        return React.cloneElement(<div className="group-item">{child}</div>)
      })}
    </header>
  )
}
