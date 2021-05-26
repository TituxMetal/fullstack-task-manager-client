import { Done } from '@styled-icons/material'
import React from 'react'

import { limeGreen } from '#root/theme/colors'

import { Icon } from './Icon'

export const DoneIcon = () => (
  <Icon color={limeGreen}>
    <Done />
  </Icon>
)

export default DoneIcon
