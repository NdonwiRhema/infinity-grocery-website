import React from 'react'
import Heading from './Heading'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from './Cart/CartItem'
import CartDetails from './Cart/CartDetails'
import NoItem from './Cart/NoItem'
import './CartBody.css'
import Cart from '../data/Cart'

const CartBody = () => {
    /// utilixe the items to draw out the component map()
  return (
    <div>
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
                   
                </Col>
                <Col xs={12} sm={3}>
                    <CartDetails/>
                    <button className='btn-bg'> Check Out </button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartBody