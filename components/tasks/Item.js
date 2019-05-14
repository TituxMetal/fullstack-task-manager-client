import { useContext } from 'react'
import styled from 'styled-components'

import { Icon } from '.'
import { TaskContext } from '../../context'

const Item = styled.li`
  background-color: rgba(0, 0, 0, 0.3);
  color: palegoldenrod;
  border: 2px dashed ${props => props.theme.textColor};
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  width: 100%;

  p {
    flex-grow: 1;
    text-align: center;

    &.completed {
      text-decoration: line-through;
      color: darkgoldenrod;
    }
  }
`

export default ({ task }) => {
  const { removeTask } = useContext(TaskContext)
  const { _id, description, completed } = task

  return (
    <Item>
      {completed ? (
        <Icon slug='done' color='6baa23' name='Done' />
      ) : (
        <Icon slug='radio_button_unchecked' color='fbfaf9' name='Undone' />
      )}
      <p className={completed ? 'completed' : null}>{description}</p>
      <Icon slug='edit' color='6495ed' name='Edit' />
      <Icon onClick={() => removeTask(_id)} slug='delete' color='dc143c' name='Delete' />
    </Item>
  )
}
