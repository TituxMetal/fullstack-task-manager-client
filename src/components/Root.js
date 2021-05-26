import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Main } from '#root/components/Main'
import { About, Home } from '#root/components/pages'

const Root = () => (
  <Router>
    <Main>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Redirect to='/' />
      </Switch>
    </Main>
  </Router>
)

export default Root
