import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import AddTask from './pages/Add.jsx'
import DetailTask from './pages/Detail.jsx'
import './index.css'

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
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routerNodemy}></RouterProvider>
  </React.StrictMode>,
)
