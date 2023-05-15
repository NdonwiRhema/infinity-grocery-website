import React from 'react'
import { Card } from 'react-bootstrap'

import './Product.css'
const Product = () => {
    const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'

  return (
  <div className='product-slide'>
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={PromoImg} />
      <Card.Body>
        <Card.Title>Product Name</Card.Title>
        <Card.Text>
          Product descruiption Lorem Ipsum
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