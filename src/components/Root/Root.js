import React from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

import { Layout } from '#root/components/Layout'
import { About, Home } from '#root/components/pages'

const Root = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/about' component={About} />
        <Redirect to='/' />
      </Switch>
    </Layout>
  </Router>
)

export default Root
