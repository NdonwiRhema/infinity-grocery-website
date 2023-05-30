import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './products/Product'
import Heading from './Heading'

const Featured = () => {
    const detail = {
        product:'Product Name ',
        description:'Short Description of the product ..',
        shortDesc: 'Shorter desc',
        slug:'produxt',
        prodQty:1,
        uPrice:'300',
        subtotal:'300'
    }
  return (
    
    <Container fluid>
        <Heading text={'Featured Products'}/>
        <Row>
            <Col xs={12} sm={3} md={3}>
                <Product detail={detail}/>
            </Col>
            <Col xs={12} sm={3} md={3}>
                <Product detail={detail}/>
            </Col>
            <Col xs={12} sm={3} md={3}>
                <Product detail={detail}/>
            </Col>
            <Col sm={3}>
                <Product detail={detail}/>
            </Col>
            <Col xs={12} sm={3} md={3}>
                <Product detail={detail}/>
            </Col>
            <Col xs={12} sm={3} md={3}>
                <Product detail={detail}/>
            </Col>
        </Row>
    </Container>
  )
}

export default Featured