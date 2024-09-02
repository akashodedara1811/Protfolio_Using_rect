import React from 'react'

function Education(props) {
  return (
    <div>
    <div className='Experience_section'>
    <div className='Sercule color'><span>a</span></div>
    <h2 className='Title'>{props.cource}</h2> 
    <h6 className='Time'>{props.Time}</h6>
<div className='Heading'>
  <p>percentage : {props.per}</p>
  <p>School / College: {props.place}</p>
  <p>Location : {props.city}</p>
</div>
</div>

    </div>
  )
}

export default Education