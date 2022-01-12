import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { TaskForm, TaskList } from '~/components'
import { CurrentTaskProvider } from '~/hooks'

const queryClient = new QueryClient()

const HomePage = () => (
  <QueryClientProvider client={queryClient}>
    <CurrentTaskProvider>
      <TaskForm />
      <TaskList />
    </CurrentTaskProvider>
  </QueryClientProvider>
)

export default HomePage
