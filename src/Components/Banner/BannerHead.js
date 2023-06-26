import React from 'react'
import './BannerHead.css'
import {FaEnvelopeOpenText,FaPhoneAlt, FaUserCircle} from 'react-icons/fa'
import { Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
import Authentic from '../../firebase'

const BannerHead = () => {
    const UserSelect= useSelector((state)=>state.user.data)
    let User
    let username
   
    if(UserSelect){
     User = UserSelect.user
   
    const displayName = User && User.displayName
    username = displayName?displayName:User.email.split('@')
    
  }
  return (
    <div className='banner_container'>
       <Container fluid>
        <Row>
            <Col xs={12} sm={3} md={3}>
                 <div className='banner_details'>
                            <FaEnvelopeOpenText fontSize={12}/>
                            <h6> contact@infinity-grocery.com</h6>
                </div>
            </Col>
            <Col xs={12} sm={3} md={3}>
                <div  className='banner_details'>
                    <FaPhoneAlt fontSize={12}/>
                    <h6> (+237) 650 186 979 | 678 739 238 </h6>
                </div>
            </Col>
            <Col xs={12} sm={1} md={1}></Col>
            <Col xs={12} sm={5} md={5}>
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
                                    {
                                        User ?(
                                            <img
                                             src={User.photoURL?User.photoURL:'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'}
                                              alt='profile-pic'/>
                                        ):(
                                            <FaUserCircle fontSize={19}/>
                                        )
                                    }
                                  
                                    {/*  // or enter the name */}
                                    <h6>{User?(<a href='/profiles'>{username[0]}</a>):(<a href='/auth'>Login</a>)}</h6>
                                    
                                </div>
                                <div className='register'>
                                    {User?(<h6><span onClick={()=>signOut(Authentic)}>LogOut</span></h6>):(<h6> Dont have an Account? <span> SignUp </span></h6>)}
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