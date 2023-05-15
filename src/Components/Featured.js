import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './products/Product'
import Heading from './Heading'

const Featured = () => {
  return (
    
    <Container fluid>
        <Heading text={'Featured Products'}/>
        <Row>
            <Col sm={3}>
                <Product/>
            </Col>
            <Col sm={3}>
                <Product/>
            </Col>
            <Col sm={3}>
                <Product/>
            </Col>
            <Col sm={3}>
                <Product/>
            </Col>
            <Col sm={3}>
                <Product/>
            </Col>
            <Col sm={3}>
                <Product/>
            </Col>
        </Row>
    </Container>
  )
}

export default Featured