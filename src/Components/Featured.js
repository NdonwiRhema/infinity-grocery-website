import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Product from './products/Product'
import Heading from './Heading'
import { pullLocalStorage } from './utils/LocalStorageOperations'
import { useDispatch, useSelector } from 'react-redux'
import { productThunk, setProduct } from '../app/features/productSlice'

const Featured = () => {
   const dataExists = pullLocalStorage("AllProducts")
   const dispatch=useDispatch()
   const MainProducts = useSelector((state)=>state.product.data)
   console.log(MainProducts)
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
        <Heading text={'Featured Products'}/>
        <Row>
            {Featured.length >0 ?Featured.map((feature,index)=>(
             <Col key={index} xs={12} sm={3} md={3}>
                  <Product detail={feature}/>
             </Col>
            )):(
                <p>No products Here...</p>
            )}
           
           
        </Row>
    </Container>
  )
}

export default Featured