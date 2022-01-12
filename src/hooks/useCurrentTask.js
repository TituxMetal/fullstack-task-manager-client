import React, { createContext, useContext, useReducer, useMemo } from 'react'

const CurrentTaskContext = createContext({})

const currentReducer = (state, { type, payload }) => {
  switch (type) {
    case 'set': {
      return { ...state, ...payload }
    }

    case 'reset': {
      return null
    }

    default:
      throw new Error(`Unknown action type: ${type}`)
  }
}

export const useCurrentTask = () => {
  const context = useContext(CurrentTaskContext)

  if (context === undefined) {
    throw new Error('useCurrentTask was used outside of its Provider')
  }

  return context
}

export const CurrentTaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currentReducer, null)

  const setCurrent = current => dispatch({ type: 'set', payload: current })
  const resetCurrent = () => dispatch({ type: 'reset' })

  const contextValue = useMemo(
    () => ({ currentTask: state, setCurrent, resetCurrent }),
    [state, setCurrent, resetCurrent]
  )

  return <CurrentTaskContext.Provider value={contextValue}>{children}</CurrentTaskContext.Provider>
}
