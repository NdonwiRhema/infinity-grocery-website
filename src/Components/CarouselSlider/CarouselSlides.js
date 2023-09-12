import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselSlides.css'

const CarouselSlides  = ({data}) => {

const slides = [
  {
  id:1,
  caption:'First slide label',
  captionText:'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  image:'https://img.freepik.com/premium-vector/healthy-vegetable-fruit-grocery-delivery-social-media-facebook-cover-post-template-design-vector_494960-117.jpg?w=826',
},
{
  id:2,
  caption:'Second slide label',
  captionText:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  image:'https://img.freepik.com/premium-vector/facebook-cover-design-template-layout_622110-134.jpg?w=826',
},
{
  id:3,
  caption:'Third slide label',
  captionText:'Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
  image:'https://img.freepik.com/free-vector/gradient-supermarket-facebook-post_23-2149387929.jpg?w=826&t=st=1683955964~exp=1683956564~hmac=89c54a19655c5257d9ad9371a76116f1b2bc28f50f04e53a3127b87d867ae78c',
},
]
 
  return (
    <Carousel>
      {
       data.length >0 ?data[0].picture.map((promo,index)=>(
       <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={promo.img}
          alt="promo slide"
          
        />
        <Carousel.Caption>
          <h3>{}</h3>
          <p>{}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        )):
        slides.map((promo,index)=>(
          <Carousel.Item key={index}>
        <img
          className="d-block w-100"
          src={promo.img}
          alt="promo alt slide"
          
        />
        <Carousel.Caption>
          <h3>{}</h3>
          <p>{}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
        ))
      }
     
    </Carousel>
  )
}

export default CarouselSlides