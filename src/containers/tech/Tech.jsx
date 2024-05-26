import React from 'react'
import video from "../../assets/tech-video-one.mp4"
import "./tech.css"

const Tech = () => {
  return (
    <div className='tech-container'>
      <div className='tech-section-one'>
        <div className='text-container'>
          <div>
            <p>Product</p>
            <p>For Bharat</p>
          </div>
        </div>
        <div className='video-container'>
          <video src={video} muted autoPlay loop></video>
        </div>
        

      </div>
    </div>
  )
}

export default Tech