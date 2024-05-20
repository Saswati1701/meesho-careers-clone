import React from 'react'
import video from "../../assets/tech-video-one.mp4"
import "./tech.css"

const Tech = () => {
  return (
    <div className='tech-container'>
      <div className='video-container'>
        <div>
          <p>Engineering</p>
          <p>for Bharat</p>
        </div>
          <video src={video} height="530px" muted autoPlay loop></video>
      </div>

      <div>
        <h2>OUR SCALE</h2>
      </div>
    </div>
  )
}

export default Tech