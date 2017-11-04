import React from "react"
import { Route, IndexRoute } from "react-router"
import { App } from "./../containers/App"
import { Landing } from "./../containers/Landing"
import { AllMoviesContainer } from "./../containers/AllMoviesContainer"
import { MoviesContainer } from "./../containers/MoviesContainer"
import { BasicContainer } from "./../containers/BasicContainer"

const routes = (
  <Route path="/">
    <Route component={App}>
      <IndexRoute component={Landing} />
      <Route path="/user" component={BasicContainer}>
        <Route path="movies" component={MoviesContainer} />
      </Route>
      <Route path="/movies" component={BasicContainer}>
        <IndexRoute component={AllMoviesContainer} />
      </Route>
    </Route>
  </Route>
)

export default routes
