import { useEffect, useState, createContext } from 'react'

import { getAllTasks } from '../lib/query'
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

  return <TaskContext.Provider value={{ list, loading }}>{children}</TaskContext.Provider>
}
