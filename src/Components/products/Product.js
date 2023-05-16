import React from 'react'
import { Card } from 'react-bootstrap'

import './Product.css'
const Product = () => {
    const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'

  return (
  <div className='product-slide'>
    {/* removed the style of width 18rem(style={{width:'18rem'}}) on the card component*/}
    <Card>
      <Card.Img variant="top" src={PromoImg} />
      <Card.Body>
        <Card.Title><span className='product-title'>Product Name</span></Card.Title>
        <Card.Text >
         <span className='product-description'> Product descruiption Lorem Ipsum</span>
        </Card.Text>
        <div className='product-btn-section'>
          <div className='product-offer-btn'><button className='btn-bg'> Add Cart</button></div>
          <div className='product-price-offer'>
            <span className='product-price'> About this..</span>
          </div>
        </div>
      </Card.Body>
    </Card>
 </div>
  )
}

export default Product