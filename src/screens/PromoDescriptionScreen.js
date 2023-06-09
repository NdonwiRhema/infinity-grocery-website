import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Crumb from '../Components/promotion/Crumb'
import FeaturedImage from '../Components/promotion/FeaturedImage'
import Heading from '../Components/Heading'
import Description from '../Components/promotion/Description'

const PromoDescriptionScreen = () => {
  return (
   <div>
    <Container>
      <Crumb/>
      <Row>
        <Col xs={12} sm={4}>
            <FeaturedImage/>
        </Col>
        <Col xs={12} sm={8}>
            <Heading text={'Overview'}/>
            <Description/>
        </Col>
      </Row>
    </Container>
   </div>
  )
}

export default PromoDescriptionScreen
