import React from 'react'
import './BannerHead.css'
import {FaEnvelopeOpenText,FaPhoneAlt, FaUserCircle} from 'react-icons/fa'

const BannerHead = () => {
  return (
    <div className='banner_container'>
       <div className='container-fluid'>
          <div className='row'>
                <div className='col-sm-3'>
                        <div className='banner_details'>
                            <FaEnvelopeOpenText fontSize={12}/>
                            <h6> contact@infinity-grocery.com</h6>
                        </div>
                    </div>
                    <div className='col-sm-3'>
                        <div  className='banner_details'>
                            <FaPhoneAlt fontSize={12}/>
                            <h6> (+237) 650 186 979 | 678 739 238 </h6>
                        </div>
                    </div>
                    <div className='col-sm-2'>

                    </div>
                    <div className='col-sm-4'>
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
                    </div>
                    
          </div>
       </div>
    </div>
  )
}

export default BannerHead