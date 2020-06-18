import React from 'react'
import { Delete } from '@styled-icons/material'

import { crimson } from '~/theme/colors'
import { Icon } from './Icon'

const DeleteIcon = () => (
  <Icon color={crimson}>
    <Delete />
  </Icon>
)

export default DeleteIcon
