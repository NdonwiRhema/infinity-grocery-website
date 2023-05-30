import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToCart } from '../../app/features/cartSlice'

import './Product.css'
const Product = ({detail}) => { 
  const info = !detail?{
    product:'ProductName',
    desc:'Short Descriotion',
    slug:'produxt',
    prodQty:1,
    uPrice:'300',
    subtotal:'300'
  }:detail
    const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'
    const ProdImg = !info.images?PromoImg:info.images
    const ProdDesc = info.description.length >= 20 ?info.description.slice(0,20)+'...':info.description
    const ProdUnits = !info.units?'Kg':info.units
    const navigate = useNavigate()

    // Redux states
    const dispatch = useDispatch()
  
    function AddtoCart(item){
      const TempProduct = {
        id:item.id,
        description:item.description,
        title:item.title,
        images:item.images,
        category:item.category,
        quantity:1,
        price:item.price,
        subtotal:item.price}
      localStorage.setItem('cart',JSON.stringify(TempProduct))
      console.log(TempProduct)
      console.log(localStorage.getItem('cart'))
     dispatch(addToCart(TempProduct))
      navigate('/cart')
    }

  return (
  <div className='product-slide'>
    {/* removed the style of width 18rem(style={{width:'18rem'}}) on the card component*/}
    <Card>
      <Card.Img variant="top" src={ProdImg[0]}  onClick={()=> navigate('/product',{state:JSON.stringify(info),replace:false})}/>
      <Card.Body>
        <Card.Title><span className='product-title'>{info.title}</span></Card.Title>
        <Card.Text >
         <span className='product-description'>{ProdDesc}</span>
        </Card.Text>
        <div className='product-btn-section'>
          <div className='product-offer-btn'>
            <button
                   className='btn-bg'
                   onClick={()=>AddtoCart(info)}
                    > Add Cart
            </button>
          </div>
          <div className='product-price-offer'>
            <span className='product-price'> {info.price} FCFA | {ProdUnits}</span>
          </div>
        </div>
      </Card.Body>
    </Card>
 </div>
  )
}

export default Product