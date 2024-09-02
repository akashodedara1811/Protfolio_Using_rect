import React from 'react'
import Home from './Home';
import About from './About';
import Contect from './Contect';
import "./Stylee.css";
import {
    BrowserRouter,
    Route,
    Link,
    Routes,
    NavLink
  } from "react-router-dom";
import ProtFolio from './ProtFolio';
function Navigation() {
  
  return (
    <BrowserRouter>   
    <header>
        <div className='Container'>
            <nav className='nav'>
                <li className='nav-item'><NavLink to="/">About</NavLink></li>
                <li className='nav-item'><NavLink to="about">Resume</NavLink></li>
                <li className='nav-item'><NavLink to="Protfolio">Projects</NavLink></li>
                <li className='nav-item'><NavLink to="Contect">Contect</NavLink></li>
            </nav>
        </div>
    </header>
      <Routes>
          <Route index element={<Home />} />
          <Route path="About" element={<About/>} />
          <Route path="Contect" element={<Contect />} />   
          <Route path='Protfolio' element={<ProtFolio/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default Navigation