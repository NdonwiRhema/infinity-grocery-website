import React, { useState } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import CheckoutDetails from '../Components/checkout/CheckoutDetails'
import ContactPerson from '../Components/checkout/ContactPerson'
import Payment from '../Components/checkout/Payment'


const CheckOutScreen = () => {
  
  const [check,setCheck] = useState({
    complete:false,
    contactData:''
  })
  console.log(check)
  return (
    <div>
        <Container fluid>
            <Row>
                <Col xs={12} sm={9}>
                  {!check.complete?(<ContactPerson setCheck = {setCheck}/>)
                  :(
                    <Payment check={check}/>
                  )}
                   
                </Col>
                <Col xs={12} sm={3}>
                    <CheckoutDetails/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CheckOutScreen