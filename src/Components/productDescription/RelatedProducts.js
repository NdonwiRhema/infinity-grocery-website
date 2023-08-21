import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../products/Product'
import './RelatedProducts.css'

const RelatedProducts = ({related}) => {
    const Products = useSelector((state)=>state.product.data)
    const RelatedProducts = Products.filter((item)=>item.category === related)
  
    return (
      <div className='Row'>
        {RelatedProducts.length>0 && RelatedProducts.map((product,index)=>(
          <Product detail={product} key={index}/>
        ))}
       
      </div>
    // <div className='related-products-container'>
    //     <div className='related-product-holder'>
    //        
    //     </div>
    // </div>
  )
}

export default RelatedProducts