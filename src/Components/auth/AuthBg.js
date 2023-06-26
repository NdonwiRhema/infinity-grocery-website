import React from 'react'

import './AuthBg.css'
import Carousels from '../Carousels'
import Auth from './Auth'
import { Col, Container,Row } from 'react-bootstrap'


const AuthBg = () => {
  return (
 <div className='container-wrapper'>
    <div className='imgHolder'> 
    <img 
      alt='bg-img'
      src='https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM='/>    
    </div>
    <div className='auth_opacity'><span></span></div>
    <div className='auth_content'>
             <Container fluid>
                    <Row>
                        <Col xs={12} sm={4}>
                            <Auth/>
                        </Col>
                        <Col  sm={8} >
                           <div className='content-carousel'>
                             <Carousels/>
                           </div>
                        </Col>
                    </Row>
                </Container>
    </div>
</div>
  )
}

export default AuthBg