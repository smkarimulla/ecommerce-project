import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Checkout } from './pages/Checkout'

import './App.css'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage />}></Route>
      <Route path='/checkout' element={<Checkout />}></Route>
    </Routes>
  )
}

export default App
