import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './component/Navbar'
import HomeBanner from './component/HomeBanner'
import LatestJobs from './component/LatestJobs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './component/About'

function App() {
  return (
   <>
      <Routes>
      <Route path="/"  element={<HomeBanner/>} />
      <Route path='/about' element={<About/>}/>
      </Routes>
      </>
  )
}

export default App
