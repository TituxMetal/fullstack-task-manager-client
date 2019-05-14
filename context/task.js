import { useEffect, useState, createContext } from 'react'

import { getAllTasks, createTask, editTask, deleteTask } from '../lib/query'
export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    setLoading(true)
    const res = await getAllTasks()
    setList(res.data)
    setLoading(false)
  }

  const isValid = text => {
    const unique = list.findIndex(task => task.description === text)

    return text.trim().length > 3 && unique === -1
  }

  const addTask = async text => {
    const res = await createTask({ description: text })
    setList([...list, res.data])
  }

  const toggleComplete = async id => {
    const { data } = await editTask(id)
    const toggledTask = list.map(task =>
      task._id === id ? { ...task, completed: data.completed } : task
    )
    setList(toggledTask)
  }

  const removeTask = async id => {
    await deleteTask(id)
    setList(list.filter(task => task._id !== id))
  }

  return (
    <TaskContext.Provider value={{ list, loading, addTask, isValid, toggleComplete, removeTask }}>
      {children}
    </TaskContext.Provider>
  )
}
