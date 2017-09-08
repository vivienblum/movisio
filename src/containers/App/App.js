import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { Provider } from 'mobx-react'

import { UserStore } from './../../stores'

const muiTheme = getMuiTheme({
  fontFamily: 'Proxima Nova Light, sans-serif',
  palette: {
    primary1Color: '#00F2B5',
    accent1Color: '#ff0033'
  }
})

const state = {
  // portfolioStore: PortfolioStore,
  userStore: UserStore,
  // profileStore: ProfileStore
}

class App extends Component {
  componentDidMount() {
    // Remove when landing page is separated
    console.log(window.location.pathname)
    if (window.location.pathname !== '/') {
      // UserStore.user.load()
    }
  }

  render() {
    const { children } = this.props
    return (
      <Provider state={state}>
        <MuiThemeProvider muiTheme={muiTheme}>
          { children }
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
