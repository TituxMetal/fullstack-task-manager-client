// import { useContext } from 'react'
import styled from 'styled-components'

// import { TaskContext } from '../../context'

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
  const { id, description, completed } = task

  return (
    <Item>
      {completed ? 'Done' : 'Undone'}
      <p className={completed ? 'completed' : null}>{description}</p>
      <span>Edit</span> <span>Delete</span>
    </Item>
  )
}
