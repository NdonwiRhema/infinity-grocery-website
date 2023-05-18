import React from 'react'
import Heading from '../Heading'
// import ceo from '../../assets/mama.jpeg'

import './HeadSection.css'
import { Col, Container, Row } from 'react-bootstrap'
const HeadSection = () => {
  return (
    <div className='main-hold'>
        <Heading text={'About Us'}/>
        <div className='top-text'>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className='mid-section'>
            <Container>
              <Row>
                <Col xs={12} sm={3}>
                  <div className='ceo-holder'>
                    <img className='ceo'
                     src='https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg' alt='CEO'/>
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
                        Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim
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