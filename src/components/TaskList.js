import React from 'react'

import { DataList, List, TaskItem } from '~/components'
import { useTasksQuery } from '~/hooks'

const TaskList = () => {
  const { data = null, error } = useTasksQuery()

  return (
    <List as='ul' $bordered>
      {data?.length ? (
        <DataList itemComponent={TaskItem} dataList={data} />
      ) : (
        <p>No tasks yet, please add any</p>
      )}
      {error && <p>There is an error...</p>}
    </List>
  )
}

export default TaskList
