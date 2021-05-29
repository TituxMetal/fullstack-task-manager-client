import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'

import { Layout } from '#root/components/Layout'

const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

const Root = () => (
  <BrowserRouter>
    <Switch>
      <Suspense fallback={<p>Loading Page...</p>}>
        <Layout>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Redirect to='/' />
        </Layout>
      </Suspense>
    </Switch>
  </BrowserRouter>
)

export default Root
