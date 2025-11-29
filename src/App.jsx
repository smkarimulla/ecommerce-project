import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'

import './App.css'
import { Orders } from './pages/Orders'
import { Tracking } from './pages/Tracking'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, [])
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
