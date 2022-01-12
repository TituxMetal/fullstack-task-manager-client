import axios from 'axios'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const apiHost = process.env.apiHost

const taskUri = `${apiHost}/api/tasks`

const deleteTask = async taskId => {
  const { data } = await axios.delete(`${taskUri}/${taskId}`)

  return data.data
}

const fetchTasks = async () => {
  const { data } = await axios.get(taskUri)

  return data.data
}

const saveTask = async ({ id, description, completed }) => {
  const { data } = id
    ? await axios.put(`${taskUri}/${id}`, { description, completed })
    : await axios.post(taskUri, { description, completed })

  return data.data
}

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation(deleteTask, {
    onSuccess: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
}

export const useSaveTask = () => {
  const queryClient = useQueryClient()

  return useMutation(saveTask, {
    onSettled: () => {
      queryClient.invalidateQueries(['tasks'])
    }
  })
}

export const useTasksQuery = (select, notifiOnChangeProps) =>
  useQuery(['tasks'], fetchTasks, { select, notifiOnChangeProps })

export const useTaskQuery = id => useTasksQuery(data => data.find(task => task.id === id), ['data'])
