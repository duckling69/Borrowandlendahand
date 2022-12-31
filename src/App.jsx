import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { About } from "./pages"
import { Routes,Route } from "react-router-dom"
import { useState } from "react"
import Features from "./pages/Features"
import Dashboard from "./pages/Dashboard"
import Sidebar from './components/Sidebar'


function App() {
  const [loggedIn, setLoggedIn] = useState('true');

  return (
 
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>

        </Routes>

        <Sidebar loggedIn={loggedIn}></Sidebar>
      </div>

    </div>
  )
}

export default App
