import React from 'react'

import './FeaturedImage.css'
const FeaturedImage = () => {
    const PromoImg = 'https://media.istockphoto.com/id/1319927536/photo/shopping-basket-full-of-groceries-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=SpfWWmsPDBPyma_SsfkaA7xtosFfASHeeHTYAiHZPGM='

  return (
    <div className='img-hold'>
      <img src={PromoImg} alt='featured'/>
      <div className='apply-details'>
        <div className='apply-promo'>
            <h6> Promo <br/> <span>You must Log in to check Eligibility </span></h6>
            <button className='eligible-btn-inactive'>Not Eligible</button>
        </div>
        <div className='validity'>
            <h6>Validity</h6>
            <p>This Offer is usually valid for 3days only. Log In to have more detail</p>
        </div>
      </div>
    </div>
  )
}

export default FeaturedImage
