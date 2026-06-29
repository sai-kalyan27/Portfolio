import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"
import Header from './components/Header'
import Footer from './components/Footer.jsx'
const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={
        <>
        <Home/> 
        <About/>
        <Skills/>
        <Projects/>   
        <Contact/>     
        </>
        }/>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App