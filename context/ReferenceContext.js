import React, { useState, createContext } from "react"

export const ReferenceContext = createContext() // Create a context

export function ReferenceProvider(props) {
  // Contains all data to be shared
  const [reference, setReference] = useState(null)

  return (
    // Values that have to be passed to other components are put inside the value prop
    <ReferenceContext.Provider value={{ reference, setReference }}>
      {props.children}
    </ReferenceContext.Provider>
  )
}
