
import './App.css';
import React from 'react'

import { Routes , Route } from  'react-router-dom'

// importing Components
import Header from  './Components/Header'
import Footer from  './Components/Footer.js'

// importing Pages

import Home from './Pages/Home.js'
import Product from './Pages/Product.js';
import Cart from './Pages/Cart.js';

const App = () => {
  return (
    <div className='max-w-[1440px] bg-white mx-auto  '>
      <Header/>
      <Routes>
      <Route path='/' element = {<Home/>}   />
      <Route path='/property/:id' element={<Product />} />
      <Route path='/cart' element={<Cart />} />

    
      </Routes>
      <Footer/>
      
    </div>
  )
}

export default App
