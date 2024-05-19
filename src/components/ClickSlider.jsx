import React, {useState} from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
const ClickSlider = ({slides}) => {
  console.log(slides);
  const [slide, setSlide] = useState(0);
  const nextSlide = () =>{
    setSlide(slide===slides.length-1?0:slide+1);
  }

  const prevSlide = () =>{
    setSlide(slide===0?slides.length-1:slide-1);
  }
  return (
    <div className='clickSlider'>
        <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide}/>
        {
            slides.map((item, i)=>{
                return( 
                <div key={i}  className={slide===i?"slide":"slide slide-hidden"}>
                    <img src={item} alt="" height="150px"/>
                </div>
                )
            })
        }
        <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide}/>
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
    </div>
  )
}

export default ClickSlider