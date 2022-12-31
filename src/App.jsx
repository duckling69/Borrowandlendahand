import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { About } from "./pages"
import { Routes,Route } from "react-router-dom"
import { useState } from "react"
import Features from "./pages/Features"

function App() {

  return (
 
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        
        </Routes>
      </div>

    </div>
  )
}

export default App
