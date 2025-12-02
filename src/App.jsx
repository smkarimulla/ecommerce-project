import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { HomePage } from './pages/home/HomePage';
import { Checkout } from './pages/checkout/Checkout';

import './App.css'
import { Orders } from './pages/orders/Orders'
import { Tracking } from './pages/Tracking'

function App() {
  const [cart, setCart] = useState([]);

  const loadCart = async () => {
    const response = await axios.get('api/cart-items?expand=product');
    setCart(response.data);
  }
  useEffect(() => {
    loadCart();
  }, []);
  return (
    <Routes>
      <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
      <Route path='/checkout' element={<Checkout cart={cart} loadCart={loadCart} />} />
      <Route path='/orders' element={<Orders cart={cart} />} />
      <Route path='/tracking' element={<Tracking />} />
    </Routes>
  )
}

export default App
