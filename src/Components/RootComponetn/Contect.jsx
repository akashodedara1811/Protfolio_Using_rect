import React from 'react'
import { Consts } from '../../images/Images'
function Contect() {
  return (
    <div className='Container-data'>
    <div className='Container-heading'>
      <h2>Contect Us</h2>
    </div>
    <div className='Video-title'>
      <p>Location :</p>
    </div>
    <div className='Map-position'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118765.34250165107!2d70.35503514123494!3d21.530545936175383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958018c6a277f53%3A0x13b52f8520a86e48!2sJunagadh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1725186311240!5m2!1sen!2sin" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"  width="100%" height="260vh" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='contect-form'>

                          <div class="ab-container">
                <div class="ab-grid">
                    <img src={Consts.Contect} alt="" width="105%" height="90%"/>
                </div>
                
            <div class="ab-grid">
                    <div class="contect-position"><input type="text" name="" id="" placeholder="Enter Your Email"/>
                         <input type="text" name="" id="" placeholder="Enter Your Number"/>
                        <textarea name="" id="" rows="10" placeholder="Enter Your Message" align="center"></textarea>
                        
                    <button>Submit</button>
                    </div>
                    </div>
            </div>
        </div>

    </div>
  )
}

export default Contect