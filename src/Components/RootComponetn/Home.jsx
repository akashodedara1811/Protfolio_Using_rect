import React from 'react' 
import {Consts} from "../../images/Images"
function Home() {
  return (
    <div className='Container-data'>
    <div className='Container-heading'>
      <h2>About Me</h2>
    </div>
    <div className='Details'>
     <li><span>A Passionate Full Stack <b>Web Developer</b> Having An Experience Of Building Web and Mobile Application With Javascript/React/php/wodpress and Some Other Cool Libraries and Freameworks.</span>
     </li>
     <br /><br /><br />
     <h2>What I'm Doing</h2>
     <div className='Work'>
      <div className='Cart'>
      <div className='Cart-icon-background'>
      <i class="fa-solid fa-globe"></i>
      </div>
      <div>
        <b><span className='Cart-Title'>Web Designer</span></b>
        <p>The most modern and high-quality design model at a profestional level.</p>
      </div>
     </div>
   

        <div className='Cart'>
          <div className='Cart-icon-background'>
          <i class="fa-solid fa-terminal"></i>
          </div>
          <div>
            <b><span className='Cart-Title'>Web Developer</span></b>
            <p>Hight-quality Developemet of sites at the professional level.</p>
          </div>
        </div>
    </div>    
  </div>

  <div className='Work'>
          <div className='Cart' style={{width:"100%"}}>
          <div className='Cart-icon-background'>
          <i class="fa-brands fa-youtube"></i>
          </div>
          <div>
          <b><span className='Cart-Title'>Youtube</span></b>
          <p>Display my Experience With Project. Which display in my youtube channel. </p>
          </div>
          </div>
        </div>
        </div>
        
  )
}

export default Home