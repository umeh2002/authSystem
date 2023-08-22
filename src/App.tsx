import React from 'react'
import { mainRouter } from './Router/mainRouter'
import { RouterProvider } from 'react-router-dom'

const App = () => {
  return (
    <RouterProvider router={mainRouter}/>
  )
}

export default App