import React from 'react'
import Experience from './Experience'
import Education from './Education'
function About() {
  return (
    <div className='Container-data'>
    <div className='Container-heading'>
        <h2 className='Cart-Title'>Education</h2>
        <div className='Resume-Section'><p></p></div>
        <div className='test'>
        <Education cource="Bachelor of Computer Applications" Time="July 2021 - May 2024" per="83.33%" place='Shastri Swami Shree Dharmajivandasji Institute of
Information Technology' city='Junagadh'/>
        <Education cource="HSC - Commerce" Time="April 2020 - May 2021" per="71.72%" place='Swami V. V Mandir' city='Junagadh'/>
        <Education cource="Secondary School Certificate" Time="April 2018 - March 2019" per="68.17%" place='Shri Swaminarayan Gurukul Vidhyalay,' city='Junagadh'/>
        </div>
     </div>



     <div className='Container-heading'>
        <h2 className='Cart-Title'>Expirence</h2>
        <div className='Resume-Section'><p></p></div>
        <Experience/>
     </div>
     
     
       <div className='Container-heading'>
        <h2 className='Cart-Title'>Skills</h2>
        <div className='Resume-Section'><p></p></div>
        <div className='Skils-Section'>
            <h2 className='Cart-Title'>Front - End </h2>
            <div className='progress'>
              <div className='progress-item1'>
                <h2>80%</h2>
              </div>
            </div>
            <h2  className='Cart-Title'>Back - End</h2>
            <div className='progress'>
              <div className='progress-item4'>
                <h2>73%</h2>
              </div>
            </div>
            <h2  className='Cart-Title'>DataBase</h2>
            <div className='progress'>
              <div className='progress-item5'>
                <h2>70%</h2>
              </div>
            </div>
        </div>
      </div>
  </div>
  )
}

export default About