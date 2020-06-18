import React from 'react'
import { Done } from '@styled-icons/material'

import { limeGreen } from '~/theme/colors'
import { Icon } from './Icon'

export const DoneIcon = () => (
  <Icon color={limeGreen}>
    <Done />
  </Icon>
)

export default DoneIcon
