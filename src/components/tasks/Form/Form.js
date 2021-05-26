import React from 'react'

import { AddIcon, Box, Input } from '#root/components/tasks'

const Form = () => (
  <Box as='form'>
    <AddIcon />
    <Input placeholder='Add a task' />
  </Box>
)

export default Form
