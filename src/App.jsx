import React from 'react'

import { motion } from "framer-motion"
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import American from './pages/American/American'
import British from './pages/British/British'
import Gallery from './pages/Gallery/Gallery'
import Footer from './components/Footer/Footer'
import Alumni from './components/Alumni/Alumni'
import Title from './components/Title/Title'
import AboutUs from './pages/AboutUs/AboutUs'






const App = () => {
  return (
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/american' element={<American/>}/>
        <Route path='/british' element={<British/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        
      </Routes>
      <div className="container">
      <Title subtitle="ALUMNI" title = "Wall Of Honors"/>
      <Alumni/>
     
      <Footer/>
     

      </div>
      

      

      
    </div>

      
      
    
  )
}

export default App
