import React from 'react'

import { Button, ItemContainer, ItemContent } from '~/components'
import { useCurrentTask, useDeleteTask, useSaveTask, useTaskQuery } from '~/hooks'

const TaskItem = ({ dataId }) => {
  const { setCurrent } = useCurrentTask()
  const toggleCompleteMutation = useSaveTask()
  const deleteTaskMutation = useDeleteTask()
  const queryInfo = useTaskQuery(dataId)
  const { completed, description, id } = queryInfo.data

  const onEditHandler = () => setCurrent({ completed, description, id })
  const onDeleteHandler = () => deleteTaskMutation.mutate(id)
  const toggleCompletedHandler = () => toggleCompleteMutation.mutate({ completed: !completed, id })

  return (
    <ItemContainer>
      <ItemContainer as='span' onClick={toggleCompletedHandler}>
        {completed ? <Button.Done /> : <Button.Undone />}
        <ItemContent $isDone={completed}>{description}</ItemContent>
      </ItemContainer>
      <Button.Edit onClick={onEditHandler} />
      <Button.Delete onClick={onDeleteHandler} />
    </ItemContainer>
  )
}

export default TaskItem
