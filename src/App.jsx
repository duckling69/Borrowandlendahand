import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { About } from "./pages"
import { Routes, Route } from "react-router-dom"
import { useState } from "react"
import Features from "./pages/Features"
import Dashboard from "./pages/Dashboard"
import Sidebar from './components/Sidebar'
import Explore from "./pages/Explore"
import Lending from "./pages/Lending"


function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (

    <div className="App">
      <Navbar></Navbar>
        <div className="flex justify-start w-[100vw] m-0 p-0">
        <div className=" ">
        <Sidebar loggedIn={loggedIn}></Sidebar>
        </div>
      <div className="w-[100%]">
        <Routes>
        <Route path='/' element={<Hero/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/features' element={<Features/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/explore' element={<Explore/>}></Route>
        <Route path='/lend/add' element={<Lending/>}></Route>


        </Routes>

        </div>
      </div>

    </div>
  )
}

export default App
