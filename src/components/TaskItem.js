import React from 'react'

import { Button, ItemContainer, ItemContent } from '~/components'
import { useCurrentTask } from '~/hooks'

const TaskItem = ({ completed, description, id }) => {
  const { setCurrent } = useCurrentTask()

  const onDeleteHandler = () => console.log('deleting item with id', id)

  return (
    <ItemContainer>
      {completed ? <Button.Done /> : <Button.Undone />}
      <ItemContent $isDone={completed}>{description}</ItemContent>
      <Button.Edit onClick={() => setCurrent({ completed, description, id })} />
      <Button.Delete onClick={onDeleteHandler} />
    </ItemContainer>
  )
}

export default TaskItem
