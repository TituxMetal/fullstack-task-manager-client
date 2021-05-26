import React from 'react'
import styled from 'styled-components'

import {
  DeleteIcon,
  DoneIcon,
  EditIcon,
  UndoneIcon
} from '#root/components/tasks/shared'
import { Box } from '#root/components/tasks/styled'

const Task = styled.p`
  color: ${({ completed, theme }) =>
    completed ? theme.darkGoldenrod : theme.paleGoldenrod};
  cursor: pointer;
  flex-grow: 1;
  text-align: center;
  text-decoration: ${({ completed }) => completed && 'line-through'};
`

const TaskItem = () => (
  <Box>
    <UndoneIcon />
    <DoneIcon />
    <Task>Task One</Task>
    <EditIcon />
    <DeleteIcon />
  </Box>
)

export default TaskItem
