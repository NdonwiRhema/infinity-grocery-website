import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap'
import CartDetail from '../Components/productDescription/CartDetail'
import { useLocation } from 'react-router-dom'
import ProductDetail from '../Components/productDescription/OneProductDetail'
import Heading from '../Components/Heading'
import RelatedProducts from '../Components/productDescription/RelatedProducts'
import { pullLocalStorage } from '../Components/utils/LocalStorageOperations'
import { useSelector } from 'react-redux'
import { French } from '../Components/utils/FrenchTranslation'


const SingleProductScreen = () => {
    const location = useLocation()
    const language = useSelector((state)=>state.language.data)
    const prodData  =  pullLocalStorage("AllProducts")
    const queryString = window.location.search ?window.location.search :''
    let query_id
    if(queryString !== ''){
      const params = new URLSearchParams(queryString)
      query_id = params.get('id')
      
    }
    const productInfo  = JSON.parse(location.state)?
                                                    JSON.parse(location.state)
                                                 :
                                                 query_id !=='' ?
                                                 prodData.filter((item)=>item.id === query_id).pop():{}
 
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
          <Heading text={language === 'en'?'Related Products':French.product.related}/>
          <RelatedProducts related={productInfo.category}/>
        </Row>
      </Container>
    </div>

    </div>
  )
}

export default SingleProductScreen