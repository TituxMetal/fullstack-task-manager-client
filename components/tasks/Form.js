import { useState, useContext } from 'react'
import styled from 'styled-components'

import { TaskContext } from '../../context'
import { Icon } from '../tasks'

const Form = styled.form`
  background-color: rgba(0, 0, 0, 0.3);
  color: palegoldenrod;
  border: 2px dashed ${props => props.theme.textColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;

  input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${props => props.theme.textColor};
    font-size: 1.4rem;
    flex-grow: 1;
    margin: 1rem;
    margin-right: 0;
    padding: 0 0 0.25rem 0;
  }
`
export default () => {
  const [text, setText] = useState('')
  const { addTask, current, isValid } = useContext(TaskContext)

  const handleSubmit = event => {
    event.preventDefault()
    const value = text.trim()

    if (isValid(value)) {
      addTask(value)
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {isValid(text.trim()) ? (
        <Icon onClick={handleSubmit} slug='add' color='6baa23' name='Add' />
      ) : (
        <Icon slug='block' color='dc143c' name='Invalid' />
      )}
      <input
        onChange={() => setText(event.target.value)}
        value={text}
        type='text'
        placeholder='Add a task'
      />
    </Form>
  )
}
