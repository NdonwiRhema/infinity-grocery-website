import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import CartDetail from '../Components/productDescription/CartDetail'
import { useLocation } from 'react-router-dom'
import ProductDetail from '../Components/productDescription/OneProductDetail'

const SingleProductScreen = () => {
    const location = useLocation()
    const productInfo  = JSON.parse(location.state)
   
  return (
    <div>

<div>
      <Container fluid>
        <Row>
            <Col xs={12} sm={9}>
               <ProductDetail data = {productInfo}/>
            </Col>
            <Col xs={12} sm={3}>
                <CartDetail data={productInfo}/>
            </Col>
        </Row>
      </Container>
    </div>

    </div>
  )
}

export default SingleProductScreen