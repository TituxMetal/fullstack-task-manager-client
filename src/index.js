import React from 'react'
import { render } from 'react-dom'

import Root from '#root/components/Root'
import { Theme } from '#root/theme'

render(
  <Theme>
    <Root />
  </Theme>,
  document.getElementById('root')
)
