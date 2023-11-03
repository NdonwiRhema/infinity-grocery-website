import React from 'react'
import { Container } from 'react-bootstrap'
import PromoRow from './promotion/PromoRow'
import Heading from './Heading'
import { Promos } from '../data/Promos'

const Promotions = () => {
  return (

    <Container fluid>
     <Heading text={'Promotions'}/>
      <PromoRow type={'promo'} Promos={Promos}/>
    </Container>
  )
}

export default Promotions