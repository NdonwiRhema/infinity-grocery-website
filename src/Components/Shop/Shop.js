import React from 'react'
import { Col,Row } from 'react-bootstrap'
import Product from '../products/Product'

const Shop = () => {
  return (
        <Row>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
            <Col xs={6} sm={3}>
                <Product/>
            </Col>
        </Row>
  )
}

export default Shop
