import React from 'react'
import Heading from '../Heading'

import './OneProductDetail.css'

const ProductDetail = ({data}) => {
  const infoImages = data.picture
  console.log(data)
  return (
    <div>
      <div >
        <div className='image-spread'>
          {
            infoImages.length>0 && infoImages.map((img,index)=>(
              <img src={img.img} alt={img.img} key={index}/>
            ))
          }
        </div>
      </div>
      <div className='details'>
        <div>
          <Heading text={data.name}/>
        </div>
        <div>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
