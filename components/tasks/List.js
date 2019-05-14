import { useContext } from 'react'
import styled from 'styled-components'

import { TaskContext } from '../../context'
import { Item } from '../tasks'

const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`

export default () => {
  const { list } = useContext(TaskContext)

  return (
    <List>
      {list.map(task => (
        <Item key={task._id} task={task} />
      ))}
    </List>
  )
}
