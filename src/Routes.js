import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './pages/Header'
import List from './pages/List'
import Register from './pages/Register'

function Rotas () {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact element={<List/>} path='/' />
        <Route element={<Register/>} path='/register' />
      </Routes>
    </Router>
  )
}

export default Rotas
