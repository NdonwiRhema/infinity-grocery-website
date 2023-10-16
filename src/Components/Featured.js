import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './products/Product'
import Heading from './Heading'
// import { pullLocalStorage } from './utils/LocalStorageOperations'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk} from '../app/features/productSlice'
import { French } from './utils/FrenchTranslation'

const Featured = () => {
  const dispatch=useDispatch()
   const AllProducts = useSelector((state)=>state.product.data)
   
   const language = useSelector((state)=>state.language.data)
   const MainProducts = AllProducts

   let Featured =[]
    if(MainProducts.length >10){
        for (let index =MainProducts.length-1 ; index >MainProducts.length-9 ; index--) {
            const element = MainProducts[index];
            Featured.push(element)

        }
    }
    else{
       if(MainProducts.length>0){
        for (let index = MainProducts.length-1; index >0; index--) {
            const element = MainProducts[index];
            Featured.push(element)
        }
       }
    }
   useEffect(()=>{
      const productLang = language==='en'?'English (en)':'Francais(fr)'
    dispatch(productThunk(productLang))
   },[dispatch,language])

  return (

    <Container fluid>
        <Heading text={language ==='en'?'Featured Products':French.home[0].featured}/>
        <Row>
            {Featured.length >0 ?Featured.slice(0,8).map((feature,index)=>(
                <Col key={index} xs={12} sm={3} md={3}>
                  <Product detail={feature}/>
                </Col>
            )):(
                <p>{language ==='en'?'No products Here...':French.home[0].none}</p>
            )}


        </Row>
    </Container>
  )
}

export default Featured