import React from 'react'
import Heading from './Heading'
import { Col, Container, Row } from 'react-bootstrap'
import NoItem from './Cart/NoItem'
import CartItem from './Cart/CartItem'
import CartDetails from './Cart/CartDetails'


const CartBody = () => {
  return (
    <div>
        <Heading text={'Your Cart'}/>
        <Container>
            <Row>
                <Col xs={12} sm={9}>
                    {/* <NoItem text={' Your Cart is Still Empty...'}/> */}
                    <div style={{overflowY:'scroll',height:300}}>
                             <CartItem/>
                             <CartItem/>
                             <CartItem/>
                             <CartItem/>
                             <CartItem/>
                             <CartItem/>
                    </div>
                </Col>
                <Col xs={12} sm={3}>
                    <CartDetails/>
                    <button className='btn-bg'> Check Out</button>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CartBody