import { useContext } from 'react'

import { TaskContext } from '../context'
import { Page } from '../components/layout'
import { List, Form } from '../components/tasks'
import { Title } from '../components/styled'

const Home = () => {
  const { list, loading } = useContext(TaskContext)
  const pluralize = `${list.length > 1 ? 'tasks' : 'task'}`
  const tasksNb = list.length > 0 ? `${list.length} ${pluralize} left` : `Nothing to do!`

  return (
    <Page title='Home page'>
      <Title>{tasksNb}</Title>
      <Form />
      {loading ? <p>Loading data...</p> : list.length > 0 && <List />}
    </Page>
  )
}

export default Home
