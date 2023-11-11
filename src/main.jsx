import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './Login'
import Add from './Add'
import DetailTask from './DetailTask'
import './index.css'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Post from './Post'
// localhost:5173/
const routerNodemy = createBrowserRouter([{
  path: '/',
  element: <>
    <h1>Header</h1>
      <Outlet></Outlet>
    <h1>Footer</h1>
  </>,
  children: [
    {path: '/', element: <App/>},
    {path: 'add', element: <Add/>},
    {path: 'login', element: <Login/>}, 
    {path: 'register', element: <h1>Dang ky</h1>},
    {path: ':id', element: <DetailTask/>}
  ],
  errorElement: <h1>404 Khong tim thay trang</h1>
}]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={routerNodemy}/>
  </React.StrictMode>,
)
