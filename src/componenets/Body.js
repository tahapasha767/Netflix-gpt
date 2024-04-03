import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Login } from './Login'
import Browser from './Browser'

function Body() {
    const appRouter=createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browser/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}

export default Body