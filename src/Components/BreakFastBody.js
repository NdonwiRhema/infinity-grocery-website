import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'
import Filters from './Shop/Filters'
import Body from './Breakfast/Body'

const BreakFastBody = ({title}) => {
  return (
    <div>
        <Container>
            <Row>
                <Col xs={12} sm={2}>
                    <Filters/>
                </Col>
                <Col xs={12} sm={1}></Col>
                <Col xs={12} sm={9}>
                    <Body title={title}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default BreakFastBody