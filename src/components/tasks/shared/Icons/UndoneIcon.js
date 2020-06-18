import React from 'react'
import { RadioButtonUnchecked } from '@styled-icons/material'

import { whisper } from '~/theme/colors'
import { Icon } from './Icon'

export const UndoneIcon = () => (
  <Icon color={whisper}>
    <RadioButtonUnchecked />
  </Icon>
)

export default UndoneIcon
