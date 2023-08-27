import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../products/Product'
import './RelatedProducts.css'
import { pullLocalStorage } from '../utils/LocalStorageOperations'

const RelatedProducts = ({related}) => {
    const Products = useSelector((state)=>state.product.data)
    const RelatedProducts = Products.length>0?Products.filter((item)=>item.category === related):pullLocalStorage("AllProducts").filter((item)=>item.category === related)
  
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