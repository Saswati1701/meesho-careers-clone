import React, {useState} from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
const ClickSlider = ({slides}) => {
  const [slide, setSlide] = useState(0);
  const nextSlide = () =>{
    setSlide(slide===slides.length-1?0:slide+1);
  }

  const prevSlide = () =>{
    setSlide(slide===0?slides.length-1:slide-1);
  }
  return (
    <>
    <div className='clickSlider'>
        {
          slides.map((item, i)=>{
            return(
              <div key={i} className={slide===i?"slide":"slide slide-hidden"}>
                {
                  item.map((card, j)=>{
                    return(
                      <div key={j} className='card'>
                        <p>{card.date}</p>
                        <img src={card.image}></img>
                        <p>{card.description}</p>
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
        
    </div>
    <div className='controls'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
        <span className='indicators'>
            {
              slides.map((_, i)=>{
                return( 
                  <button 
                  className={slide===i?"indicator":"indicator indicator-inactive"} 
                  key={i} 
                  onClick={()=>{setSlide(i)}}>
                    </button>
                    )
                  })
                  
                }
        </span>
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
      </div>
    </>
  )
}

export default ClickSlider