import React, { useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import { About } from "./pages"
import { Routes, Route, Navigate } from "react-router-dom"
import { useState } from "react"
import Features from "./pages/Features"
import Dashboard from "./pages/Dashboard"
import Borrow from "./pages/Borrow"

import Sidebar from './components/Sidebar'
import { useAuth0 } from "@auth0/auth0-react";




function App() {
  const { isAuthenticated } = useAuth0();
  const [loggedIn, useloggin] = useState(true);

  if (!isAuthenticated) {
    return (<div className="App">
      <Navbar></Navbar>
      <div>
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/features' element={<Features />}></Route>
        </Routes>
      </div>
    </div>)
  }
  else {
    return (<div className="App flex justify-start w-[100vw] m-0 p-0">
      <Sidebar loggedIn={loggedIn}></Sidebar>
      <div className="w-[100%]">
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/borrows' element={<Borrow />}></Route>
        </Routes>
      </div>

    </div>)

  }

}

export default App
