import React, { useState } from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'



const Card = ({image, text}) => {
    return (
        <div className='tech-slider-card'>
            <img src={image} alt="" />
            <p>{text}</p>
        </div>
    )
}

const TechSlide = ({slide}) => {
    return(
        <>
            {
                slide.map((item, i)=>{
                    return(
                        <div key={i} className={`tech-slide-card-${i==0?"i":i==1?"ii":i==2?"iii":"i"}`}>
                            <Card image={item.image} text={item.text}/>
                        </div>
                    )
                })
            }       
        </>
    )
}


const TechSlider = ({allSlides}) => {
    const [slide, setSlide] = useState(0);
    const nextSlide = () =>{
        setSlide(slide===allSlides.length-1?0:slide+1);
      }
    
      const prevSlide = () =>{
        setSlide(slide===0?allSlides.length-1:slide-1);
      }
  return (
    <>
        <div className='tech-slider-container'>
            {
                allSlides.map((item, i)=>{
                    return(
                        <div key={i} className={slide===i?"slide":"slide slide-hidden"}>
                        <TechSlide key={i} slide={item}/>
                        </div>
                    )
                })
            }

        </div>
    <div>
        <FaArrowCircleLeft size={50} onClick={prevSlide}/>
        <FaArrowCircleRight size={50} onClick={nextSlide}/>
    </div>
    </>
  )
}

export default TechSlider