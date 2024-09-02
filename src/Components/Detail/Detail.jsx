import React, { useState } from 'react'
import { Consts } from '../../images/Images'
import "./Detail.css";
import { NavLink } from 'react-router-dom';
function Detail() {
    const[youtube,setyoutube] = useState("");
    const setlink =()=>{
        setyoutube(prev =>prev='www.youtube.com/@Coding_project1811')
    }
  return (
    <div className='Main-Container'>
        <div className='Image-Container'>
            <img src={Consts.profileImg} alt="" height=""  width="180" />
        </div>
        <div className='Name'><h2>AKASH&nbsp;ODEDARA</h2></div>
        <div className='title'>
            
            <p>WEB DEVELOPER</p>
        </div>
        <hr className='Line' />
        <div className='Social-Container'>
            <div className='Scocial-item'>
                <div className='Social-icon'>
                <a href="mailto:akashodedara2004@gmail.com" className='Links'><i class="fas fa-envelope-open"></i></a>
                </div>
                <p className='Scocial-Title'>Email</p>
                <p className='Social-description'>akashodedara2004@gmail.com</p>
            </div>
            <div className='Scocial-item'>
            <div className='Social-icon'>
            <i class="fa-solid fa-phone"></i>
                </div>
                <p className='Scocial-Title'>Phone</p>
                <p className='Social-description'>+91 7211183943</p>
            </div>
            <div className='Scocial-item'>
            <div className='Social-icon'>
            <i class="fa-solid fa-cake-candles"></i>
                </div>
                <p className='Scocial-Title'>Birthdate</p>
                <p className='Social-description'>15,June-2004</p>
            </div>
           
            <div className='Scocial-item'>
            <div className='Social-icon'>
            <i class="fa-solid fa-location-dot"></i>
                </div>
                <p className='Scocial-Title'>Location</p>
                <p className='Social-description'>Junagadh,Gujarat</p>
            </div>
            
        </div>
        <div className='Social-icon icons'>
        <a className='Links' href='https://www.linkedin.com/in/odedaraakash/'><i class="fa-brands fa-linkedin-in"></i></a>
        <a className='Links' href='https://www.youtube.com/@Coding_project1811'><i class="fa-brands fa-youtube"></i></a>
        <a className='Links' href='https://github.com/akashodedara1811/'><i class="fa-brands fa-github"></i></a>
        </div>
    </div>
  )
}

export default Detail