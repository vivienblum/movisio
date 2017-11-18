import React, { Component } from "react"
// import injectTapEventPlugin from "react-tap-event-plugin"
// injectTapEventPlugin()
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import { Provider } from "mobx-react"

import { UserStore, MovieStore } from "./../../stores"

const muiTheme = getMuiTheme({
  fontFamily: "GillSans, Calibri, Trebuchet, sans-serif",
  palette: {
    primary1Color: "#00F2B5",
    accent1Color: "#ff0033"
  }
})

const state = {
  userStore: UserStore,
  movieStore: MovieStore
}

class App extends Component {
  componentWillMount() {
    if (window.location.pathname !== "/") {
      return UserStore.user.load().catch(err => {
        window.location.pathname = "/"
      })
    }
  }

  render() {
    const { children } = this.props
    return (
      <Provider state={state}>
        <MuiThemeProvider muiTheme={muiTheme}>{children}</MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
