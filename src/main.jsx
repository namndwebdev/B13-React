import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AddTask from './pages/Add.jsx'
import DetailTask from './pages/Detail.jsx'
import './index.css'
import Login from './pages/Login.jsx'
import axios from 'axios'
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

const routerNodemy = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/:idTask',
    element: <DetailTask/>
  },{
    path: '/add',
    element: <AddTask/>
  },{
    path: '/login',
    element: <Login/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerNodemy}></RouterProvider>
  </React.StrictMode>,
)
