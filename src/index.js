import React from 'react'
import { render } from 'react-dom'

import { GlobalStyle } from '~/core'
import Routing from '~/routes'

render(
  <GlobalStyle>
    <Routing />
  </GlobalStyle>,
  document.getElementById('root')
)
