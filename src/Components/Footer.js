import React from 'react'
import { Col, Row,Container } from 'react-bootstrap'
import FooterLink from './footerlinks/FooterLink'
import FooterLogo from '../assets/logotxt.png'
import { useSelector } from 'react-redux'
import { French } from './utils/FrenchTranslation'


const Footer = () => {
    const language = useSelector((state)=>state.language.data)
  return (
    <div style={{backgroundColor:'#1c2847',width:'100%',minHeight:'200px',borderTop:'2px solid #f39317',marginTop:25,padding:25}}>
        <Container fluid>
            <Row>
                <Col xs={12} sm={3} md={3} lg={3}>
                    <FooterLink text={language === 'en' ?'About Us':French.footer[0].about} link={'/about'}/>
                    <FooterLink text={language === 'en' ?'Delivery Points':French.footer[0].delivery} link={'/delivery'}/>
                    <FooterLink text={language === 'en' ?'Contact Us':French.footer[0].contact} link={'/'}/>
                    <FooterLink text={language === 'en' ?'Social Media':French.footer[0].social} link={'/'}/>
                </Col>
                <Col xs={12} sm={3} md={3} lg={3}>
                    <FooterLink text={language === 'en' ?'Home':French.footer[0].home} link={'/'}/>
                    <FooterLink text={language === 'en' ?'Recipes':French.footer[0].recipes} link={'/recipe'}/>
                    <FooterLink text={language === 'en' ?'Shopping':French.footer[0].shopping} link={'/shop'}/>
                    <FooterLink text={language === 'en' ?'Promotions':French.footer[0].promotions} link={'/promotion'}/>
                </Col>
                <Col xs={12} sm={6} md={6} lg={6}>
                    <div style={{width:'100%',}}>
                        <img src={FooterLogo} alt='logotext' width={'70%'} height={'auto'}/>
                    </div>
                    <p style={{color:'#fff'}}>
                    {language === 'en'?`"Unlock Your Ultimate Grocery Adventure! 🛒
Discover a World of Delicious Possibilities! 🌽🍕
From Fresh Farm Treasures to Ready-Made Delights - Your One-Stop Grocery Wonderland Awaits! 🌟💎"`:French.footer[0].footerText}
                    </p>
                </Col>
            </Row>
        </Container>
        {/* <div className='footer-contact'>
            <div style={{width:'20%'}} className='contact-1'></div>
            <div className='contact-2'>
                <div className='footer-contact-details'>
                            <FaEnvelopeOpenText fontSize={12}/>
                            <h6>contact@infinity-grocery.com</h6>
                </div>
                <div  className='footer-contact-details'>
                    <FaPhoneAlt fontSize={12}/>
                    <h6> (+237) 650 186 979 | 678 739 238 </h6>
                </div>
            </div>
            <div style={{width:'20%'}} className='contact-3'></div>
        </div> */}
    </div>
  )
}

export default Footer