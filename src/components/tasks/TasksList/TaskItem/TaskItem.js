import React from 'react'

import { Delete, Done, Edit, Undone } from '#root/components/Icons'
import { Box } from '#root/components/tasks'

import { Task } from './styled'

const TaskItem = ({ description, done, id }) => (
  <Box>
    {done ? <Done /> : <Undone />}
    <Task completed={done}>{description}</Task>
    <Edit id={id} />
    <Delete id={id} />
  </Box>
)

export default TaskItem
