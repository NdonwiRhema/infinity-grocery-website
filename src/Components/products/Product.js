import React from 'react'
import { Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../app/features/cartSlice'

import './Product.css'
import { selectUnits } from '../utils/GeneralOperations'
const Product = ({detail}) => { 
    const navigate = useNavigate()
    const currentCart = [localStorage.getItem('cart')]
   let unit 
    // Redux states
    const dispatch = useDispatch()
  
    function AddtoCart(item){
      const TempProduct = {
        id:item.id,
        description:item.desc,
        title:item.name,
        images:item.picture[0].img,
        category:item.category,
        quantity:1,
        price:item.price,
        discount:item.pricePromotion>0?item.price-item.pricePromotion:0,
        subtotal:item.price,
        Units:selectUnits(item.stock[0].units),
        size:'M'
      }
      if(currentCart.length === 0){
         localStorage.setItem('cart',JSON.stringify(TempProduct))
           }
           dispatch(addToCart(TempProduct))
          window.scrollTo(0,0)
    }

  return (
  <div className='product-slide'>
    {/* removed the style of width 18rem(style={{width:'18rem'}}) on the card component*/}
   {
    Object.keys(detail).length>0 ?(
    <Card>
      <Card.Img variant="top" src={detail.picture.length>0?detail.picture[0].img:''}  onClick={()=> navigate('/product',{state:JSON.stringify(detail),replace:false})}/>
      <Card.Body>
        <Card.Title><span className='product-title'>{detail.name}</span></Card.Title>
        <Card.Text >
         <span className='product-description'>{detail.shortDesc}</span>
        </Card.Text>
        <div className='product-btn-section'>
          <div className='product-offer-btn'>
            <button
                   className={detail.stock[0].outStock?'btn-Inactivate':'btn-bg'}
                   onClick={()=>detail.stock[0].outStock?'':AddtoCart(detail)}
                    > Add Cart
            </button>
          </div>
          <div className='product-price-offer'>
            <span className='product-price'> {detail.price} {detail.currency} | {unit}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
    ):(
      <p>No products Here...</p>
    )
}
</div>
  )
}

export default Product