import React from 'react'
import profilepicImg from '../assets/profile pic.png';

const Hero = () => {
  return (
    <div className='container relative'>
      <div className='hero-content'>
        <h1 className='header fw-bold  display-5  '>Hi, I’m  Sangeetha Prabu</h1>
        <img
          src={profilepicImg}
          className="profile mx-auto d-block img-thumbnail rounded-circle float-end"
          alt="Profile picture"
         />
        <p>Path2Tech Trainee</p>
      </div>
       
      
    </div>
  )
}

export default Hero
