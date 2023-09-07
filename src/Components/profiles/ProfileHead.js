import React from 'react'
import './ProfileHead.css'
import profilImg from '../../assets/profil.jpg'
import { FaCamera, FaEdit } from 'react-icons/fa'
import { FirebaseUpload, updateFirebase } from '../utils/FirebaseOperations'

import { getDownloadURL } from 'firebase/storage'



const ProfileHead = ({data,user,setRefresh}) => {
   
function uploadImage(e){
     let img = document.getElementById('profil_img')
    img.setAttribute('src',URL.createObjectURL(e.target.files[0]))
    const imgs = {
        files:e.target.files[0],
        ID:e.target.files[0].name
    }
     FirebaseUpload(imgs).then(result=>{
       
        if(result.bytesTransferred===result.totalBytes){
            console.log('Image Upload Sucess')
            getDownloadURL(result.ref).then((url)=>{
            //    const linker ={
            //        img:url
            //    }
            //console.log(url)
             // update the profile and update the user collection
             try {
                updateFirebase("Users",user.uid,{profile_pic:url}).then(res=>{
                    
                })
             } catch (error) {
                console.log(error)
             }
            }) 

        }

     })
}
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
                        <img id='profil_img' src={data&&data.profile_pic?data.profile_pic:profilImg} alt='profile'/>
                    </div>
                    <div id='form_pic'>
                        <form>
                            <label for='picture'><FaCamera fontSize={25} color='f39317' stroke='1px'/></label>
                            <input id='picture' type='file' style={{display:'none'}} onChange={(e)=>uploadImage(e)}/>
                        </form>
                    </div>
                   </div>
                    <div className='pic-credentials'>
                        <h3> {data?data.telephone:'No Username '}</h3>
                        <h5>Email: {user&&user.email}</h5>
                        <h6>Telephone: {data&&data.telephone}</h6>
                        <h6 style={{fontWeight:'200',fontStyle:'italic'}}>Address: {data&&data.Address}</h6>
                    </div>
                </div>
                <div className='profile-edit'>
                    <div  onClick={setRefresh(true)}><FaEdit/>  <span className='edit-text'>Refresh Profile</span></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileHead