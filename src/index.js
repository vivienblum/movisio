// import injectTapEventPlugin from "react-tap-event-plugin"
import React, { Component } from "react"
import ReactDOM from "react-dom"

import { Router, browserHistory } from "react-router"
import routes from "./router/router"

import "./styles/css/index.css"

// var injectTapEventPlugin = require("react-tap-event-plugin")
// injectTapEventPlugin()

const rootEl = document.getElementById("root")

class Root extends Component {
  render() {
    return <Router history={browserHistory}>{routes}</Router>
  }
}

ReactDOM.render(<Root />, rootEl)

if (module.hot) {
  module.hot.accept(Root, () => {
    const NextApp = Root
    ReactDOM.render(<NextApp />, rootEl)
  })
}
