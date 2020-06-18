import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

import { About, Home } from '~/components/pages'
import { Main } from '~/components/Main'

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
