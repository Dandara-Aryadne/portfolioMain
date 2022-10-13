import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../pages/Home'
import Works from '../../pages/Works'
import Ods from '../../pages/Ods'
import About from '../../pages/About'

export default function Path(){



  
  return (
    <BrowserRouter>
     {/* <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/works">Works</Link>
      </ul>
     </nav> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/works" element={<Works/>}/>
        <Route path="/ods" element={<Ods/>}/>
      </Routes>
    </BrowserRouter>
  )
}
