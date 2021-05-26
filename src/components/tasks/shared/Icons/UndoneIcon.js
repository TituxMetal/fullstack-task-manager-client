import { RadioButtonUnchecked } from '@styled-icons/material'
import React from 'react'

import { whisper } from '#root/theme/colors'

import { Icon } from './Icon'

export const UndoneIcon = () => (
  <Icon color={whisper}>
    <RadioButtonUnchecked />
  </Icon>
)

export default UndoneIcon
