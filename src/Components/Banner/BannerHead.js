import React from 'react'
import './BannerHead.css'
import {FaEnvelopeOpenText,FaPhoneAlt, FaUserCircle} from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'

const BannerHead = () => {
  return (
    <div className='banner_container'>
       <Container fluid>
        <Row>
            <Col xs={3}>
                 <div className='banner_details'>
                            <FaEnvelopeOpenText fontSize={12}/>
                            <h6> contact@infinity-grocery.com</h6>
                </div>
            </Col>
            <Col xs={3}>
                <div  className='banner_details'>
                    <FaPhoneAlt fontSize={12}/>
                    <h6> (+237) 650 186 979 | 678 739 238 </h6>
                </div>
            </Col>
            <Col xs={2}></Col>
            <Col xs={4}>
                        <div  className='banner_identity'>
                           <div className='Language_select'>
                                <form>
                                    <select>
                                        <option>English</option>
                                        <option>French</option>
                                    </select>
                                </form>
                           </div>
                           <div className='user_identity'>
                                <div className='login'>
                                    {/* <img src='' alt='profile-pic'/> */}
                                    <FaUserCircle/>
                                    {/*  // or enter the name */}
                                    <h6> Login </h6>
                                </div>
                                <div className='register'>
                                    <h6> Dont have an Account? <span> SignUp </span></h6>
                                </div>
                           </div>
                        </div>
            </Col>
        </Row>
       </Container>
    </div>
  )
}

export default BannerHead