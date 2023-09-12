import React from 'react'
import CarouselSlides from './CarouselSlider/CarouselSlides'
import PromoSlides from './CarouselSlider/PromoSlides'

const Carousels = ({data,promo}) => {

  return (
    <div>
      {
        promo ?( <PromoSlides data={data}/>):(<CarouselSlides data={data} />)
        }
    </div>
  )
}

export default Carousels