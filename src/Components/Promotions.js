import React from 'react'
import { Container } from 'react-bootstrap'
import PromoRow from './promotion/PromoRow'
import Heading from './Heading'

const Promotions = () => {
  return (

    <Container fluid>
     <Heading text={'Promotions'}/>
      <PromoRow/>
    </Container>
  )
}

export default Promotions