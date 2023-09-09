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
    const styles ={
      places:{
        backgroundColor:'#cac8c8',
        height:500,
        scroll:'auto',
        overflowY:'auto'
      }
    }
  return (
    <div>
       <DeliveryBanner/>
       <Container fluid>
          <Row>
              <Col xs={12} sm={8}>
                <Map location={place}/>
              </Col>
              <Col xs={12} sm={4}>
                <div style={styles.places}>
                  <Places setPlace={setPlace}/>
                </div>
              </Col>
          </Row>
        </Container>
    </div>
  )
}

export default DeliveryContent