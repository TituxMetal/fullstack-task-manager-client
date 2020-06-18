import React from 'react'

import { Container, Title } from '~/components/shared'
import { Form, TasksList } from '~/components/tasks'

const Home = () => (
  <Container>
    <Title>Home Page</Title>
    <Form />
    <TasksList />
  </Container>
)

export default Home
