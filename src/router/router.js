import React from "react"
import { Route, IndexRoute } from "react-router"
import { App } from "./../containers/App"
// import { UserStore } from "../stores"
import { Landing } from "./../containers/Landing"
import { AllMoviesContainer } from "./../containers/AllMoviesContainer"
import { MoviesContainer } from "./../containers/MoviesContainer"
import { BasicContainer } from "./../containers/BasicContainer"

function loggedIn() {
  // ...
  // console.log(UserStore.user)
}

function requireAuth(nextState, replace) {
  if (!loggedIn()) {
    replace(
      {
        // pathname: "/"
      }
    )
  }
}

const routes = (
  <Route path="/">
    <Route component={App}>
      <IndexRoute component={Landing} />
      <Route path="/user" component={BasicContainer} onEnter={requireAuth}>
        <Route path="movies" component={MoviesContainer} />
      </Route>
      <Route path="/movies" component={BasicContainer} onEnter={requireAuth}>
        <IndexRoute component={AllMoviesContainer} />
      </Route>
    </Route>
  </Route>
)

export default routes
