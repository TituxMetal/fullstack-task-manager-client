import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Layout } from '~/core'

import MainRoute from './MainRoute'

const NoMatch = () => <h2>Nothing to see here!</h2>

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/*' element={<MainRoute />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default Routing
