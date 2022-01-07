import React, { useState, createContext, useContext } from 'react'

const CurrentTask = createContext({})

export const CurrentTaskProvider = ({ children }) => {
  const [current, setCurrent] = useState(null)

  return <CurrentTask.Provider value={{ current, setCurrent }}>{children}</CurrentTask.Provider>
}

export const useCurrentTask = () => useContext(CurrentTask)
