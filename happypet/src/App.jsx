import React from 'react'
import Landing from './components/landing'
import Login from './components/login'
import Register from './components/register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const App = () => {
  return (

    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App



