import React from 'react'
import { Block } from '@styled-icons/material'

import { crimson } from '~/theme/colors'
import { Icon } from './Icon'

const BlockIcon = () => (
  <Icon color={crimson}>
    <Block />
  </Icon>
)

export default BlockIcon
