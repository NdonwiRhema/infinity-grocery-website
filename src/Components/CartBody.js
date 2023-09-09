import React from 'react'
import Heading from './Heading'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from './Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {EmptyCart } from '../app/features/cartSlice'
import CartDetails from './Cart/CartDetails'
import NoItem from './Cart/NoItem'

import './CartBody.css'
import { FaTrashAlt } from 'react-icons/fa'
import { French } from './utils/FrenchTranslation'


const CartBody = () => {
    const navigate = useNavigate()
   const dispatch =useDispatch()
    const cartSelect = useSelector((state)=>state.cart)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
    const language = useSelector((state)=>state.language.data)
    let Cart = cartSelect.data
function toCheckOut (){
    navigate('/checkout',{state:JSON.stringify(Cart)})
}
  return (
    <div>
       <Heading text={language ==='en'?'Your Cart':French.cart.title}/>
        <Container>
            <Row>
                <Col xs={12} sm={9}>
                    <div className='cart-item-holder'>
                        {Cart.length === 0 ? (<NoItem text={language==='en'?'No items in cart....':French.cart.none}/>)
                        :Cart.map((item,index)=>(
                                <CartItem  data={item} key={index}/>
                            ))
                        }
                    </div>  
                   <div className=''>
                    <button className='btn-bg'
                         onClick={()=>dispatch(EmptyCart())}>
                            <span><FaTrashAlt fontSize={14} color='orange'/> </span> 
                            {language === 'en'?'Empty Cart':French.cart.empty}
                    </button>
                   </div>
                </Col>
                <Col xs={12} sm={3}>
                    <CartDetails/>
                    <button  className={`${cartTotal>0?'btn-bg ':'btn-Inactivate'}`} onClick={()=>cartTotal>0&&toCheckOut()}>{language === 'en'?'Check Out':French.cart.checkOut}</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartBody