import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../app/features/cartSlice'

import {Card, Row ,Col} from 'react-bootstrap'
import './FilteredRows.css'

const FilteredRows = ({array}) => {
    const navigate = useNavigate()
    const currentCart = [localStorage.getItem('cart')]
    let unit = ''
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
          size:'M'
        }
        if(currentCart.length === 0){
           localStorage.setItem('cart',JSON.stringify(TempProduct))
             }
             dispatch(addToCart(TempProduct))
     
      }
  return (
    <Row>
    
        {
  array.length>0 ? array.map((detail,index)=>(
    <Col sm={4}key={index}>
        <Card >
          <Card.Img variant="top" src={detail.picture[0].img}  onClick={()=> navigate('/product',{state:JSON.stringify(detail),replace:false})}/>
          <Card.Body>
            <Card.Title><span className='product-title'>{detail.name}</span></Card.Title>
            <Card.Text >
            <span className='product-description'>{detail.shortDesc}</span>
            </Card.Text>
            <div className='product-btn-section'>
              <div className='product-offer-btn'>
                <button
                      className='btn-bg'
                      onClick={()=>AddtoCart(detail)}
                        > Add Cart
                </button>
              </div>
              <div className='product-price-offer'>
                <span className='product-price'> {detail.price} {detail.currency} | {unit}</span>
              </div>
            </div>
          </Card.Body>
        </Card>
        {/* <div className='filtered-product'>
            <div className='filtered-product-image'>
                <img src='' alt='img'/>
            </div>
            <div className='filtered-product-body'>
                <div className='filtered-product-title'>
                    <h5>{detail.name}</h5>
                </div>
                <div className='filtered-product-text'>
                
                </div>
                <div className='filtered-product-footer'>

                </div>
            </div>
        </div> */}
   </Col>
  )):('')
}
    
 
    </Row>
  )
}

export default FilteredRows