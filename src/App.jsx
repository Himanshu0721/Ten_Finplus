import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/home/Home'
import Contact from './components/pages/contact/Contact'
import About from './components/pages/about/About'
import Footer from "./components/footer/Footer"
import Navbar from './components/navbar/Navbar'
import CustomNavbar from './components/navbar/Navbar'
function App() {
  return (

    <div>
    <CustomNavbar/>
   <Footer/>
    </div>
 
                
  )
}

export default App
