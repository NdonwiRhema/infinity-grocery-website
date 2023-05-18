import React from 'react'
import './deliveryBanner.css'
const deliveryBanner = () => {
  return (
    <div className='banner-holder-full'>
        <div className='bannerBg-img'>
            <img 
            alt='bannerbg'
            src='https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg'/>
        </div>
        <div className='cover-opacity'></div>
        <div className='head-title'>
            <h2>Delivery/Pick Up Points</h2>
        </div>
    </div>
  )
}

export default deliveryBanner