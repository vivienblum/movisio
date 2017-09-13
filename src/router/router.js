import React from 'react'
import { Route } from 'react-router'
import { App } from './../containers/App'

const routes = (
    <Route path="/">
      <Route component={App}>
      </Route>
    </Route>
)

export default routes
