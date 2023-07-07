import React from 'react'
import './ProfileHead.css'
import profilImg from '../../assets/about.jpg'
import { FaCamera, FaEdit } from 'react-icons/fa'


const ProfileHead = ({data,user}) => {
    console.log(data,user)
 return (
    <div className='profile-head-details'>
        <div className='banner-img'>
            <img 
            src='https://tandsgo.com/wp-content/uploads/2020/02/Mulitcolor-confetti-on-blue-background-680x170.jpg' 
            alt='banner-img'/>
        </div>
        <div className='profile-banner-opacity'>
            <span></span>
        </div>
        <div className='profile-head-details'>
            
            <div className='float-details'>
                <div className='pic-details'>
                   <div id='profile-pic-wrapper'> 
                    <div id='profile_pic'>
                        <img src={profilImg} alt='profile'/>
                    </div>
                    <div id='form_pic'>
                        <form>
                            <label for='picture'><FaCamera fontSize={25} color='f39317' stroke='1px'/></label>
                            <input id='picture' type='file' style={{display:'none'}}/>
                        </form>
                    </div>
                   </div>
                    <div className='pic-credentials'>
                        <h3> {user&&user.displayName?user.displayName:'No Username '}</h3>
                        <h5>Email: {user&&user.email}</h5>
                        <h6>Telephone: {data&&data.telephone}</h6>
                        <h6 style={{fontWeight:'200',fontStyle:'italic'}}>Address: {data&&data.Address}</h6>
                    </div>
                </div>
                <div className='profile-edit'>
                    <a href='/profiles/edit'><FaEdit/>  <span className='edit-text'>Edit Profile</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHead