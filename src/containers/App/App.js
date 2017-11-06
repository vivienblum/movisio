import React, { Component } from "react"
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import { Provider, observer } from "mobx-react"
// import injectTapEventPlugin from "react-tap-event-plugin"
// injectTapEventPlugin()

import { UserStore, MovieStore } from "./../../stores"

const muiTheme = getMuiTheme({
  fontFamily: "Proxima Nova Light, sans-serif",
  palette: {
    primary1Color: "#00F2B5",
    accent1Color: "#ff0033"
  }
})

const state = {
  userStore: UserStore,
  movieStore: MovieStore
}

@observer
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
