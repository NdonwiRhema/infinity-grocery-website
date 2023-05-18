import React from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import FooterLink from './footerlinks/FooterLink'
import FooterLogo from '../assets/logotxt.png'

const Footer = () => {
    
  return (
    <div style={{backgroundColor:'#1c2847',width:'100%',minHeight:'200px',borderTop:'2px solid #f39317',marginTop:25,padding:25}}>
        <Container fluid>
            <Row>
                <Col xs={12} sm={3} md={3} lg={3}>
                    <FooterLink text={'About Us'} link={'/about'}/>
                    <FooterLink text={'Delivery Points'} link={'/delivery'}/>
                    <FooterLink text={'Contact Us'} link={'/'}/>
                    <FooterLink text={'Social Media'} link={'/'}/>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3}>
                    <FooterLink text={'Home'} link={'/'}/>
                    <FooterLink text={'Recipes'} link={'/recipe'}/>
                    <FooterLink text={'Shopping'} link={'/shop'}/>
                    <FooterLink text={'Promotions'} link={'/'}/>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <div style={{width:'100%',}}>
                        <img src={FooterLogo} alt='logotext' width={'70%'} height={'auto'}/>
                    </div>
                    <p style={{color:'#fff'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Footer