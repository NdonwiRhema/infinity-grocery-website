import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './products/Product'
import Heading from './Heading'
import { pullLocalStorage } from './utils/LocalStorageOperations'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk, setProduct } from '../app/features/productSlice'
import { French } from './utils/FrenchTranslation'

const Featured = () => {
   const dataExists = pullLocalStorage("AllProducts")
   const dispatch=useDispatch()
   const MainProducts = useSelector((state)=>state.product.data)
   const language = useSelector((state)=>state.language.data)
   
   let Featured =[]
    if(MainProducts.length >10){
        for (let index =MainProducts.length ; index >0 ; index--) {
            const element = MainProducts[index];
            Featured.push(element)
            
        }
    }
    else{
        for (let index = MainProducts.length-1; index >0; index--) {
            const element = MainProducts[index];
            Featured.push(element)
        }
    }
   useEffect(()=>{
    if(dataExists.length === 0){
        dispatch(productThunk())
    }
    else{
        dispatch(setProduct(dataExists))
    }
   },[dispatch])
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