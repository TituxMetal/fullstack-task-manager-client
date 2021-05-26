import { Delete } from '@styled-icons/material'
import React from 'react'

import { crimson } from '#root/theme/colors'

import { Icon } from './Icon'

const DeleteIcon = () => (
  <Icon color={crimson}>
    <Delete />
  </Icon>
)

export default DeleteIcon
