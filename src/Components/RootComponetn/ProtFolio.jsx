import React from 'react'
import YoutubeData from './YoutubeData'
function ProtFolio() {

  return (
    
    <div className='Container-data'>
    <div className='Container-heading'>
    <div className='Cart-Title'><b>PROJECTS</b></div> 
    <YoutubeData id='1' Project_title="Google Gemini Clone" Link="https://www.youtube.com/embed/PY8-vDR8VTc?si=yJFiH6Q-Ec-dCkc7" Description='Im thrilled to share that Im working on an innovative project: a Gemini clone built with React and Vite! 🎉
Gemini is an awesome AI app designed and Im taking on the challenge of creating a similar app to help to find all type of data.

-Tech Stack:
 1 React for building interactive user interfaces
 2 Vite for lightning-fast development and build processes
 3 React Router for seamless navigation
 4 State Management with React Context/Redux
 5 UI Design using [Design Library of Choice]
 6 Api Integration'/>

<YoutubeData id='2' Project_title="Speed car Rental System" Link="https://www.youtube.com/embed/xuItEYQQ3aA?si=cu9KQ3KNpn6-z35S" Description='purpose of this playlist:  : 

- this project is for bigner which can easy understand the c# .net and SQL server 

- Students familyer with Guna Framework.

- Easy to understand.

- How to create project in c#


#c #dotnet #howtocreate #howtomake #sqlserver'/>

<YoutubeData id='3' Project_title="Crystal Book shop Management" Link="https://www.youtube.com/embed/HGKgn4kbN5s?si=-gHfvME8Hg7EWgZW" Description='Im excited to share my latest project on ASP.NET Web: Book Shop Management.

In this comprehensive tutorial, I guide you through building a complete book shop management system from scratch. Whether youre managing book inventory, handling customer transactions, or generating sales reports, this tutorial covers it all.In this video, youll learn:
Project setup in ASP.NET
Database creation for books and authors
CRUD operations for book management
User interface development for various functionalities
Implementing security with authentication and authorization
Performance optimization techniques
This video beginners and experienced developers looking to enhance their ASP.NET skills.'/>
    </div>
    </div>
  )
}

export default ProtFolio