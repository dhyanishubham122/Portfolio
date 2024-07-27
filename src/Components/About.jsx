import React from 'react'
import './About.css'
import shubhamhack from './shubhamhack.png'
function About() {
  return (
    <div className='about-main'>
      

    <div className="about">
    
       <div className="image">
      <img src={shubhamhack} alt="profile" />
    </div>
    
    <div className="about-content">
      <h1>About Me</h1>
      <h3>Passionate about creating FullStack website with User freindly interfaces. I have an experiemce in web 
        Development with several Projects completed.</h3>
        <a href="/Shubham.pdf" download="Shubham.pdf">
    <button className='cv' >Download Resume</button>
    </a>
      
    
    </div>
   
  </div>

  </div>
  )
}

export default About