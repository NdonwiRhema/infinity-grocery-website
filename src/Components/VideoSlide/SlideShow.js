import React from 'react'
// import CarouselSlides from '../CarouselSlider/CarouselSlides'


import "./SlideShow.css"
import video from '../../assets/fry.mp4'
const SlideShow = () => {
  return (
    <div className='video-slide-container'>
        {/* <CarouselSlides/> */}
        <div className='video-show'>
            <video autoPlay loop video="100%" height={'100%'}>
                <source src={video} type='video/mp4'/>
                Your Browser Does not Support  Video
            </video>
            <div className='video-placeholder'></div>
        </div>
        
    </div>
  )
}

export default SlideShow