import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Route , createRoutesFromElements , RouterProvider} from 'react-router-dom'
import Layout from './layout.jsx'
import Home from './pages/Home.jsx'
import Rental from './pages/Rental.jsx'
import Hotel from './pages/Hotel.jsx'
import Login from './pages/Login.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='rentals' element={<Rental/>}/>
      <Route path='hotels' element={<Hotel/>}/>
      <Route path='login' element={<Login/>}/>

      


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  
    <App />
  </React.StrictMode>,
)
