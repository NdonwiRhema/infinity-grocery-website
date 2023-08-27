import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import CartDetail from '../Components/productDescription/CartDetail'
import { useLocation } from 'react-router-dom'
import ProductDetail from '../Components/productDescription/OneProductDetail'
import Heading from '../Components/Heading'
import RelatedProducts from '../Components/productDescription/RelatedProducts'
import { pullLocalStorage } from '../Components/utils/LocalStorageOperations'


const SingleProductScreen = () => {
    const location = useLocation()
    const prodData  =  pullLocalStorage("AllProducts")
    const queryString = window.location.search ?window.location.search :''
    let query_id
    if(queryString !== ''){
      const params = new URLSearchParams(queryString)
      query_id = params.get('id')
      console.log(query_id)
    }
    const productInfo  = JSON.parse(location.state)?
                                                    JSON.parse(location.state)
                                                 :
                                                 query_id !=='' ?
                                                 prodData.filter((item)=>item.id === query_id).pop():{}
   console.log(productInfo)
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
        <Row>
          <Heading text={'Related Products'}/>
          <RelatedProducts related={productInfo.category}/>
        </Row>
      </Container>
    </div>

    </div>
  )
}

export default SingleProductScreen