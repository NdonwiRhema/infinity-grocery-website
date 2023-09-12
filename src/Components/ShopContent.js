import React, { useState } from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Filters from './Shop/Filters'
import Shop from './Shop/Shop'

const ShopContent = () => {
  const [filter,setFilter]=useState([])

 return (
    <Container>
        <Row>
            <Col xs={12} sm={2}>
                <Filters setFilter={setFilter}/>
            </Col>
            <Col xs={12} sm={1}></Col>
            <Col xs={12} sm={9}>
                <Shop filter={filter}/>
            </Col>
        </Row>
    </Container>
  )
}

export default ShopContent
