import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App } from './../containers/App'
import { Landing } from './../containers/Landing'

const routes = (
    <Route path="/">
      <Route component={App}>
        <IndexRoute component={Landing} />
      </Route>
    </Route>
)

export default routes
