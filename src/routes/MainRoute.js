import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { AboutPage, HomePage } from '~/pages'

const MainRoute = () => (
  <Routes>
    <Route path='about' element={<AboutPage />} />
    <Route index element={<HomePage />} />
  </Routes>
)

export default MainRoute
