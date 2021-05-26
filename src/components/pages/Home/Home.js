import React from 'react'

import { Container, Title } from '#root/components/shared'
import { Form, TasksList } from '#root/components/tasks'

const Home = () => (
  <Container>
    <Title>Home Page</Title>
    <Form />
    <TasksList />
  </Container>
)

export default Home
