import React from 'react'

import { Form, TasksList } from '#root/components/tasks'

import { Title } from './styled'

const Home = () => (
  <>
    <Title>Home Page</Title>
    <Form />
    <TasksList />
  </>
)

export default Home
