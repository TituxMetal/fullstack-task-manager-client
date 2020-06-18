import React from 'react'
import { Add } from '@styled-icons/material'

import { limeGreen } from '~/theme/colors'
import { Icon } from './Icon'

const AddIcon = () => (
  <Icon color={limeGreen}>
    <Add />
  </Icon>
)

export default AddIcon
