import React from 'react'
import { useRef, useEffect } from 'react';
import video1 from "../assets/home-video-one.mp4"
import home from "../assets/phone.png"
import gift from "../assets/gifts.png"
import meditate from "../assets/meditate.png"
import springPhone from "../assets/phone2.png"
import connected from "../assets/connected.png"
import shop from "../assets/shop.png"
import prize from "../assets/prize.png"
import dress from "../assets/dress.png"
import Funding from '../components/Funding';
import facebook from "../assets/facebook.png"
import Investors from '../components/Investors';

const fundingData = [
  {
    series: "F",
    date:"Sep 2021",
    amount:"570"
  },
  {
    series: "E",
    date:"April 2021",
    amount:"300"
  },
  {
    series:"D",
    date:"August 2019",
    amount:"125"
  },
  {
    series: "C",
    date:"Oct 2018",
    amount:"50"
  },
  {
    series: "B",
    date:"April 2018",
    amount:"11.6"
  },
  {
    series: "A",
    date:"November 2017",
    amount:"3"
  },
  {
    series:"Seed",
    date:"March 2016",
    amount:"3"
  }

]

const FundSlider = fundingData.map((data)=>{
  return(
    <Funding series={data.series} date={data.date} amount={data.amount}/>
  )
})

const Home = () => {
  console.log(FundSlider)
  return (
    <div className='home-container centre'>
      <h1>Building for a billion Indians</h1>
      <video src={video1} height="680px" muted autoPlay loop ></video>
      <p>OUR MISSION</p>
      <h1>Democratize Internet Commerce for Everyone</h1>
      <video src={video1} height="500px" muted autoPlay loop ></video>
      <p>HOW WE OPERATE</p>

      <div className='card-container'>
        <div className='upper-card-container'>
          <img src={home} alt="" height="270px"/>
          <img src={gift} alt="" height="150px"/>
          <img src={meditate} alt="" height="200px"/>
          <img src={springPhone} alt="" height="200px"/>
        </div>
        <p>WE'RE GROWING</p>
        <div className='lower-card-container'>
          <img src={connected} alt="" height="180px"/>
          <img src={shop} alt="" height="213px"/>
          <img src={prize} alt="" height="211px" />
          <img src={dress} alt="" height="320px"/>
        </div>
      </div>

      <p>MARQUEE INVESTORS BELIEVE IN US</p>
      <div className='slider-container'>
        <div className='slider'>
          {
            fundingData.map((data)=>{
              return(
                <Funding series={data.series} date={data.date} amount={data.amount} />
              )
            })
          }
        </div>
      </div>
      <div className='slider-container'>
        <div className='slider'>
          <Investors investorLogo={facebook}/>
          <Investors investorLogo={facebook}/>
          <Investors investorLogo={facebook}/>
          <Investors investorLogo={facebook}/>
        </div>
      </div>
    </div>
  )
}

export default Home