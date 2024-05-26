import React from 'react'
import "./home.css"
import { useRef, useEffect } from 'react';
import video1 from "../../assets/home-video-one.mp4"
import home from "../../assets/phone.png"
import gift from "../../assets/gifts.png"
import meditate from "../../assets/meditate.png"
import springPhone from "../../assets/phone2.png"
import connected from "../../assets/connected.png"
import shop from "../../assets/shop.png"
import prize from "../../assets/prize.png"
import dress from "../../assets/dress.png"
import Funding from '../../components/home/Funding';
import Investors from '../../components/home/Investors';
import facebook from "../../assets/facebook.png"
import yCombinator from "../../assets/y-combinator.png"
import softBank from "../../assets/soft-bank.png"
import elevation from "../../assets/elevation.png"
import prosus from "../../assets/prosus.png"
import sequoia from "../../assets/sequoia.png"
import bCapital from "../../assets/b-capital.png"
import fidelity from "../../assets/fidelity-investments.png"
import ClickSlider from '../../components/home/ClickSlider';
import cloth from "../../assets/cloth.png"
import handnphone from "../../assets/handnphone.png"
import hands from "../../assets/hands.png"
import facebook2 from "../../assets/facebook2.png"
import naspers from "../../assets/naspers.png"
import coins from "../../assets/coins.png"
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

const investors = [[facebook, "90"], [yCombinator, "100"], [softBank, "26"], [elevation, "35"], [prosus, "180"], [sequoia, "24"], [bCapital, "20"], [fidelity, "38"]];
const slides = [
  [
    {
      date:"August 2015",
      image:cloth,
      description: "We began with Fashnear - A hyperlocal fashion discovery platform"
    },
    {
      date:"March 2016",
      image:handnphone,
      description: "Pivoted to a mobile-first platform to help shopowners sell on Whatsapp & Facebook"
    },
    {
      date:"June 2016",
      image:yCombinator,
      description: "Meesho is born, our founders get selected to Y Combinator"
    }
  ],
  [
    {
      date:"Feb 2019",
      image:hands,
      description: "We hit 1.2 million monthly orders and ~200k transacting users",
    }, 
    {
      date:"June 2019",
      image:facebook2,
      description: "Facebook invests us - first investment in an Indian startup",
    },
    {
      date: "Feb 2020",
      image: naspers,
      description: "Our 1st ESOP buyback worth $1 million"
    }
  ],
  [
    {
      date:"Feb 2019",
      image:hands,
      description: "We hit 1.2 million monthly orders and ~200k transacting users",
    },
    {
      date:"June 2019",
      image:facebook2,
      description: "Facebook invests us - first investment in an Indian startup",
    },
    {
      date: "Feb 2020",
      image: naspers,
      description: "Our 1st ESOP buyback worth $1 million"
    }

  ]

]

const Home = () => {
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
            fundingData.map((data, i)=>{
              return(
                <Funding key={i} series={data.series} date={data.date} amount={data.amount} />
              )
            })
          }
        </div>
      </div>
      <div className='slider-container'>
        <div className='slider'>
          {
            investors.map((item, i)=>{
              return(
                <Investors key={i} investorLogo={item[0]} logoSize={item[1]} />
              )
            })
          }
        </div>
      </div>
      <ClickSlider slides={slides}/>
      <div className='buildForBharat'>
        <img src={coins} alt='coins' height="200px"></img>
        <div>
          <p>Innovating</p>
          <p>e-commerce</p>
          <button>BUILD FOR BHARAT</button>
        </div>
        <img src={home} height="214px"></img>
      </div>
      
    </div>
  )
}

export default Home