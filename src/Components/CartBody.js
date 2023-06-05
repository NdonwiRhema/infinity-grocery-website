import React from 'react'
import Heading from './Heading'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from './Cart/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import {EmptyCart } from '../app/features/cartSlice'
import CartDetails from './Cart/CartDetails'
import NoItem from './Cart/NoItem'

import './CartBody.css'
import { FaTrashAlt } from 'react-icons/fa'


const CartBody = () => {
    // const Cart = useSelector((state)=>state.cart.data)
    // const total  = useSelector((state)=>state.cart.totalItems)
    // const dispatch = useDispatch()
    const dispatch =useDispatch()
    const cartSelect = useSelector((state)=>state.cart)
    let Cart = cartSelect.data
  return (
    <div>
        {/* Cart Content : {Cart.map((item)=>(
           <div>
              <div>{item.title}   --  {item.quantity}  <h4>{total}</h4></div>
                <div>
                    <button onClick={()=>dispatch(increment(item))}>Increment</button>
                    <button onClick={()=>dispatch(decrement(item))}>decrement</button>
                    <button onClick={()=>dispatch(removeItem(item))}>Delete Item</button>
                </div>
           </div>
        ))} */}
         <Heading text={'Your Cart'}/>
        <Container>
            <Row>
                <Col xs={12} sm={9}>
                    <div className='cart-item-holder'>
                        {Cart.length === 0 ? (<NoItem text={'No items in cart....'}/>)
                        :Cart.map((item,index)=>(
                                <CartItem  data={item} key={index}/>
                            ))
                        }
                    </div>  
                   <div className=''>
                    <button className='btn-bg'
                         onClick={()=>dispatch(EmptyCart())}>
                            <span><FaTrashAlt fontSize={14} color='orange'/> </span> 
                            Empty Cart
                    </button>
                   </div>
                </Col>
                <Col xs={12} sm={3}>
                    <CartDetails/>
                    <button  className='btn-bg'> Check Out </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartBody