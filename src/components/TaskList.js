import React from 'react'

import { DataList, List, TaskItem } from '~/components'

const tasks = [
  {
    id: 1,
    description: 'Task 1',
    completed: true
  },
  {
    id: 2,
    description: 'Task 2',
    completed: false
  },
  {
    id: 3,
    description: 'Task 3',
    completed: false
  },
  {
    id: 4,
    description: 'Task 4',
    completed: true
  }
]

const TaskList = () => (
  <List as='ul' $bordered>
    <DataList itemComponent={TaskItem} dataList={tasks} />
  </List>
)

export default TaskList
