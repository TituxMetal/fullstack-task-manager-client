import { useEffect, useState, createContext } from 'react'

import { getAllTasks, createTask, editTask, deleteTask } from '../lib/query'
export const TaskContext = createContext()

export const TaskProvider = ({ children }) => {
  const [list, setList] = useState([])
  const [current, setCurrent] = useState({})
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
    setCurrent({})
  }

  const toggleComplete = async id => {
    const { data } = await editTask(id)
    const toggledTask = list.map(task =>
      task._id === id ? { ...task, completed: data.completed } : task
    )
    setList(toggledTask)
  }

  const updateTask = async text => {
    const { data } = await editTask(current._id, { description: text })
    const updatedTask = list.map(task =>
      task._id === current._id
        ? { ...task, description: data.description, completed: data.completed }
        : task
    )

    setList(updatedTask)
    setCurrent({})
  }

  const removeTask = async id => {
    await deleteTask(id)
    setList(list.filter(task => task._id !== id))
    setCurrent(current._id === id ? {} : current)
  }

  return (
    <TaskContext.Provider
      value={{
        list,
        loading,
        current,
        setCurrent,
        addTask,
        isValid,
        toggleComplete,
        updateTask,
        removeTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
