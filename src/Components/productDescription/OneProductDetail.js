import React from 'react'
import Heading from '../Heading'

import './OneProductDetail.css'

const ProductDetail = ({data}) => {
  const infoImages = data.images
  return (
    <div>
      <div >
        <div className='image-spread'>
          {
            infoImages.map((img,index)=>(
              <img src={img} alt='images.0' key={index}/>
            ))
          }
        </div>
      </div>
      <div className='details'>
        <div>
          <Heading text={data.title}/>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
