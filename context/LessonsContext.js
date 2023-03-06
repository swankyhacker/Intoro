import React, { useState, createContext } from "react"

export const LessonsContext = createContext() // Create a context

export function LessonsProvider(props) {
  // Contains all data to be shared
  const [snapshot, setSnapshot] = useState(null)

  return (
    // Values that have to be passed to other components are put inside the value prop
    <LessonsContext.Provider value={{ snapshot, setSnapshot }}>
      {props.children}
    </LessonsContext.Provider>
  )
}
