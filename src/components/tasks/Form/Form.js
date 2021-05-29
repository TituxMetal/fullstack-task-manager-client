import React from 'react'

import { Add } from '#root/components/Icons'
import { Box } from '#root/components/tasks'

import { Input } from './styled'

const Form = () => (
  <Box as='form'>
    <Add />
    <Input placeholder='Add a task' />
  </Box>
)

export default Form
