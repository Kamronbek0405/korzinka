import React from 'react'
import './App.css'

import {  useSelector } from 'react-redux'
import { ProductCard } from './components/product-card'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/home'
import { MainLayout } from './layout/main-layout'
import { About } from './pages/about'
import { Contact } from './pages/contact'

function App() {

  const {productList} = useSelector((state) => state.product)

  return (
    <>
  
  

   <Routes>
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Route>
   </Routes>


    </>
  )
}

export default App
