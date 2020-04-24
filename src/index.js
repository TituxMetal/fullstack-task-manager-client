import React from 'react'
import { render } from 'react-dom'

import Theme from './theme'
import Root from './components/Root'

render(
  <Theme>
    <Root />
  </Theme>,
  document.getElementById('root')
)
