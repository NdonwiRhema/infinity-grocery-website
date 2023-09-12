import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselSlides.css'

const PromoSlides  = ({data}) => {

  return (
    <Carousel>
      {
       data.length >0 &&data.map((promo,index)=>(
       <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={promo.image}
          alt="promo slide"
          
        />
        <Carousel.Caption>
          <h3>{promo.caption}</h3>
          <p>{promo.captionText}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        ))
      }
     
    </Carousel>
  )
}

export default PromoSlides