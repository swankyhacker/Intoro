import React, { useState, createContext } from "react"

export const ReviewsContext = createContext() // Create a context

export function ReviewsProvider(props) {
  // Contains all data to be shared
  const [snapshot, setSnapshot] = useState(null)

  return (
    // Values that have to be passed to other components are put inside the value prop
    <ReviewsContext.Provider value={{ snapshot, setSnapshot }}>
      {props.children}
    </ReviewsContext.Provider>
  )
}
