import { useContext, useEffect } from 'react'

import { TaskContext } from '../context'
import { Page } from '../components/layout'
import { getAllTasks } from '../lib/query'
import { List, Form } from '../components/tasks'
import { Title } from '../components/styled'

const Home = ({ data }) => {
  const { list, fetchData, loading } = useContext(TaskContext)
  const uncompletedTasks = list.filter(task => task.completed === false)
  const pluralize = `${uncompletedTasks.length > 1 ? 'tasks' : 'task'}`
  const tasksNb = uncompletedTasks.length > 0 ? `${uncompletedTasks.length} ${pluralize} left` : `Nothing to do!`

  useEffect(() => {
    fetchData()
  }, [data])

  return (
    <Page title='Home page'>
      <Title>{tasksNb}</Title>
      <Form />
      {loading ? <p>Loading data...</p> : list.length > 0 && <List />}
    </Page>
  )
}

export async function getStaticProps() {
  const { data } = await getAllTasks()

  return {
    props: {
      data,
    },
  }
}

export default Home
