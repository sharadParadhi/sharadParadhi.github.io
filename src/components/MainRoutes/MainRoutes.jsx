import React from 'react'
import {Route,Routes} from "react-router-dom"
import {Intro} from "../Intro/Intro.jsx"
import {About} from "../About/About.jsx"

function MainRoutes() {
  return (
    
   <Routes>
    <Route path='intro' element={<Intro/>}/>
    <Route path='about' element={<About/>}/>
   
   </Routes>
  )
}

export default MainRoutes
