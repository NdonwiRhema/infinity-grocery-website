import React from 'react'
import Heading from '../Heading'
import ceoImg from '../../assets/about.jpg'

import './HeadSection.css'
import { Col, Container, Row } from 'react-bootstrap'
const HeadSection = () => {
  return (
    <div className='main-hold'>
        <Heading text={'About Us'}/>
        <div className='top-text'>
            <p>
          <span style={{fontWeight:'bold',fontSize:16}}> INFINITY GROCERY </span>.What began little, with a solitary idea of a store that provides a rebate and
            the basic thought of moving more for less,has become in the course of the last 20 years
            a real part in the lives of most homes.<br/>
            From its inception back in 2001, the objective has been to ensure a comfortable and affordable shopping experience to the 
            household consumer through diversification and multiplication of alternative/Substitute products at impressive prices.<br/>
            Making an appearance on the web as infinity-grocery.com is just another attempt to extend our unique touch to your 
            everyday groceries shopping experience.<br/>
            With over 500 different Grocery products and alternatives, and most popular brands on the shelves, everyone is definitely likely to 
            find the perfect balance between  gastronomic priorities and financial ability.<br/>
            Appropriate from Seasonal Fruits and Vegetables, Rice (Imported and Local productions),
             Spices and Seasonings to Packaged items, Beverages, Personal consideration items, Meats – we have it all.
            </p>
        </div>
        <div className='mid-section'>
            <Container>
              <Row>
                <Col xs={12} sm={3}>
                  <div className='ceo-holder'>
                    <img className='ceo'
                     src={ceoImg} alt='CEO'/>
                    <div className='about-ceo'>
                      <h5> CEO & Managing Director</h5>
                      <h6>Infinity Grocery</h6>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={1}></Col>
                <Col xs={12} sm={8}>
                  <div className='ceo-content'>
                    <h3>"</h3>
                      <p> 
                        <span style={{fontWeight:'bold'}}>Ambe Mary</span> is Founder of Infinity Grocery and sole owner since 2001.<br/>
                        What characterizes every home is quality of life the homes have which is reflected primarily by the quality of food on the table (amongst other internal
                        factors).<br/>
                        A key ingredient to healthy and Happy homes is good food.This is the reason why infinity grocery has been on a mission to ensure that
                        there could always be that one place where people could always find the balance between financial ability and a descent meal on the table.<br/>
                        It will be a great Joy for us to extend our touch till it gets to your grocery list.<br/>
                        Meeting your needs is our Joy. We can't wait to have you ordering.<br/>
                        Cheers..
                      </p>
                    <h3 className='end-content'>"</h3>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
    </div>
  )
}

export default HeadSection