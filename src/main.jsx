import React from 'react'
import ReactDOM from 'react-dom/client'
import TaskList from './component/TaskList.jsx'
import './config/axios'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Login from './component/Login.jsx'
import PrivateRouter from './component/PrivateRouter.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRouter>
      <TaskList></TaskList>
    </PrivateRouter>
  },
  {
    path: '/login',
    element: <Login></Login>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
