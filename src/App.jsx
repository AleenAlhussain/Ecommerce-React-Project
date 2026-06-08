import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavbarFun from "./components/Navbar";
function App() {

  return (
  
      
 <div className="App">
  <NavbarFun />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/auth' element={<Auth />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
      </Routes>
    </div>
    
  )
}

export default App
