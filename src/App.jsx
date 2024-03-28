import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import MainLayout from './Layout/MainLayout'
import Home from './Components/Home/Index'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
