import React from 'react'
import Cart from './Cart'
import Product from './Product'
import Header from './Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Home
