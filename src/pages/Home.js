import React from 'react'

import { TaskForm, TaskList } from '~/components'
import { CurrentTaskProvider } from '~/hooks'

const HomePage = () => (
  <CurrentTaskProvider>
    <TaskForm />
    <TaskList />
  </CurrentTaskProvider>
)

export default HomePage
