import React  from 'react'

function YoutubeData(props) {
  
  return (
    <>
    
    <div className='Video_container'>
        <div className='Video-title'>{props.id}) {props.Project_title}</div>
     <div className='Video'>
        <iframe width="100%" height="315" src={props.Link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className='Details'>
           <p>{props.Description}</p>
        </div>
    </div>
    </>
  )
}

export default YoutubeData