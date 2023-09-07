import React,{useState}from 'react'
import DeliveryBanner from './delivery/deliveryBanner'
import { Col, Container, Row } from 'react-bootstrap'
import Map from './delivery/Map'
import Places from './delivery/Places'

const DeliveryContent = () => {
    const [place,setPlace] = useState({
      place:'',
      src:''
    })
  return (
    <div>
       <DeliveryBanner/>
       <Container fluid>
          <Row>
              <Col xs={12} sm={8}>
                <Map location={place}/>
              </Col>
              <Col xs={12} sm={4}>
                <Places setPlace={setPlace}/>
              </Col>
          </Row>
        </Container>
    </div>
  )
}

export default DeliveryContent