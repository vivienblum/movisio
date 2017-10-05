import React from "react"
import "./styles/Header.scss"

export default function Header({children}) {
  return (
    <header>
      {children}
    </header>
  )
}
