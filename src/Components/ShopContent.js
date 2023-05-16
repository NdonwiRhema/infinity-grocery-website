import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Filters from './Shop/Filters'
import Shop from './Shop/Shop'

const ShopContent = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} sm={2}>
                <Filters/>
            </Col>
            <Col xs={12} sm={1}></Col>
            <Col xs={12} sm={9}>
                <Shop/>
            </Col>
        </Row>
    </Container>
  )
}

export default ShopContent
