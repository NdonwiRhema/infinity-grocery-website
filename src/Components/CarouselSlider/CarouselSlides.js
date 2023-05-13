import React from 'react'
import { Carousel } from 'react-bootstrap'
import './CarouselSlides.css'

const CarouselSlides  = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-vector/gradient-supermarket-facebook-post_23-2149387929.jpg?w=826&t=st=1683955964~exp=1683956564~hmac=89c54a19655c5257d9ad9371a76116f1b2bc28f50f04e53a3127b87d867ae78c"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/healthy-vegetable-fruit-grocery-delivery-social-media-facebook-cover-post-template-design-vector_494960-117.jpg?w=826"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-vector/facebook-cover-design-template-layout_622110-134.jpg?w=826"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CarouselSlides