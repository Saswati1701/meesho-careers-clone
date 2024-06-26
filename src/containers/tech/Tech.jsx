import React from 'react'
import video from "../../assets/tech-video-one.mp4"
import "./tech.css"
import TechSlider from '../../components/tech/TechSlider'
import tv from "../../assets/tv.png"
import numberX from "../../assets/numberX.png"
import gateway from "../../assets/gateway.png"
import clock from "../../assets/clock.png"
import bEvents from "../../assets/b-vents.png"
import chats from "../../assets/chats.png"
import wavyDisplacement from "../../assets/wavy-displacement.mp4"


const techSlideData = [
  [
      {
          image: tv,
          text: "Our average API latency on the server-side is 30ms"
      },
      {
          image: numberX,
          text: "Our average daily search queries have grown 120x in a year"
      },
      {
          image: gateway,
          text: "Our API gateway layer processes >70k requests every second on an average"
      }
  ],
  [
      {
          image: clock,
          text: "A new product is uploaded on Meesho every second"
      },
      {
          image: bEvents,
          text: "Our ETL moves more than 50 billion events every day"
      },
      {
          image: chats,
          text: "Our A/B system manages 250k peak requests every second on an average"
      }
  ]
] 

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

      <div className='tech-section-two'>
        <h2>OUR SCALE</h2>
        <TechSlider allSlides={techSlideData}/>
      </div>

      <div className="tech-section-three">
        <h1><span className='blue'>Product</span> <span className='violet'>Design</span></h1>
        <h1><span className='pink'>Engineering</span> <span className='yellow'>Data Science</span> </h1>
        <video src={wavyDisplacement} muted autoPlay loop height="600px"></video>
      </div>
    </div>
  )
}

export default Tech