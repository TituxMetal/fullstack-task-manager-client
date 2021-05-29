import React from 'react'

import { TaskItem } from './TaskItem'

const tasks = [
  {
    id: 1,
    description: 'Task 1',
    done: false
  },
  {
    id: 2,
    description: 'Task 2',
    done: true
  },
  {
    id: 3,
    description: 'Task 3',
    done: false
  }
]

const TasksList = () => (
  <ul>
    {tasks.map(({ id, description, done }) => (
      <li key={id}>
        <TaskItem {...{ description, done, id }} />
      </li>
    ))}
  </ul>
)

export default TasksList
