import React from 'react'
import './BannerMid.css'
import logo from '../../assets/Logo Full.png'
import { FaFacebook, FaInstagram, FaSearch, FaTelegram, FaWhatsapp } from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'

const BannerMid = () => {
  return (
    <Container>
        <Row>
            <Col xs={12} sm={2}>
                <div className='logo_div'>
                    <div>
                        <a href='/'>
                            <img className='logo' src={logo} alt='Logo'/>
                        </a>            
                    </div>
                </div>
            </Col>
            <Col xs={12} sm={10}>
            <div className='search_section'>
                    <div className='search_bar'>
                        <div className='form_div'>
                            <form >
                                <div className='search_field'>
                                    <input placeholder='Search for any product ...'/>
                                </div>
                                <div className='categories_select'>
                                    <select>
                                        <option>Categories</option>
                                        <option>Vegetables</option>
                                        <option>Pulses</option>
                                        <option>Cereals</option>
                                    </select>
                                </div>
                                <div className='submit_section'>
                                   <button type='submit'>
                                     <span className='search_icon'><FaSearch fontSize={11}/></span><span className='search_text'> Search</span>
                                   </button>
                 
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='social_icons'>
                        <div><h6> Talk to Us Directly </h6></div>
                        <FaFacebook className='social_media_icons'/>
                        <FaInstagram className='social_media_icons'/>
                        <FaWhatsapp className='social_media_icons'/>
                        <FaTelegram className='social_media_icons'/>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  )
}

export default BannerMid