import React, { useState } from 'react'
import './SecurityComponent.css'
import Heading from '../Heading'
import { Alert, Button } from 'react-bootstrap'
import Authentic from '../../firebase'
import { Formik } from 'formik'
import * as yup from 'yup'
import { EmailAuthProvider, reauthenticateWithCredential, sendEmailVerification, updatePassword } from 'firebase/auth'
import { FaTimes } from 'react-icons/fa'


const Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
const SecuritySchema = yup.object().shape({
    oldpassword:yup.string()
                .matches(Regex,{message:'Password must contain Uppercase,Lowercase,Numbers,special Character and 8characters long'})
                .required('Required'),
    newpassword:yup.string()
                .oneOf([yup.ref('oldpassword')],'Passwords must match').required('Required')
})

const ReAuth = ({logged,setLogged})=>{
 const ReAuthSchema = yup.object().shape({
    email:yup.string().email("You need to enter a Valid Email").required('Required'),
    password:yup.string()
                .matches(Regex,{message:'Password must have 1 special character, 1uppercase,1lowerCase, minlength of 8'})
                .min(8).required('Required'),
  }) 
  
function ReAuthSubmit(values){
    const user = Authentic.currentUser
    const credentials  = EmailAuthProvider.credential(
        user.email,values.password
    )
    console.log(credentials)
      reauthenticateWithCredential(user,credentials).then((user)=>{
        console.log('User :'+user)
        setLogged(true)
        
    }).catch((e)=>{
        if(  e.message ==='Firebase: Error (auth/user-not-found).'){
      alert("No such User Exists")
      }
        if(  e.message ==='Firebase: Error (auth/invalid-password).'){
      alert("Wrong Password")
      }
    })
    }
    return(
        <div>
            <Formik
            initialValues={{
                email:' ',
                password:'',
                      }}
              onSubmit={(values)=>{ReAuthSubmit(values,setLogged())}}
              validationSchema={ReAuthSchema}
            >
                 {({handleBlur,handleChange,handleSubmit,values,errors})=>(
             
             <form onSubmit={handleSubmit}>
                 <div className='Login-form'>
                    <div className='form-group'>
                        <input 
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Username or email' 
                        className='form-control'
                        style={{border:errors.email? "1px solid red":'none'}} 
                        type='email' required/>
                        
                        <span className='error-message'>{errors.email}</span>
                    </div>
                    <div className='form-group'>
                        <input
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        placeholder='Password' 
                        className='form-control'
                        style={{border:errors.password? "1px solid red":'none'}} 
                        type='password' required/>
                        <span className='error-message'>{errors.password}</span>

                    </div>
                 </div>
              <div className='submit-grp'>
                <button  type='submit' 
                // `${!complete?'btn-bg':'btn-Inactive'}`
                className={'btn-bg'}>Sign In</button>
              </div>
              
            </form>
            )}
            
            </Formik>
        </div>
    )
}
const SecurityComponent = () => {
    const [status,setStatus] = useState('')
    const [logged,setLogged] = useState(false)
    const user = Authentic.currentUser
    function changePassword(values){
        const currentUser = Authentic.currentUser 
        
       try {
        updatePassword(currentUser,values.newpassword).then(()=>{
            setStatus('changedPassword')
            setLogged(false)
        })
       } catch (error) {
        console.log(error)
       }
    }
    function verifyEmail(){
        console.log("verifying sending")
        sendEmailVerification(user).then(()=>{
            setStatus('verification sent')
          
        });
    }
  return (
   <div className='security-wrapper'>
        {status === 'changedPassword'&&(
         <Alert variant={'success'} closeVariant=''>
           <div className='success-grp'>
                <span>Password Updated Success</span>
                <FaTimes color='green' onClick={()=>setStatus('')}/>
           </div>
        </Alert>
        )}
                    
            <Heading text={'Update your Passwords '}/>
           {!logged?(
            <ReAuth  setLogged={setLogged}/>
           ):(
           <div className='password-form'>
            
            <Formik
                initialValues={{
                    oldpassword :'',
                    newpassword:'',
                }}
                onSubmit={(values)=>changePassword(values)}
                validationSchema={SecuritySchema}
            >
                {({handleBlur,handleChange,handleSubmit,errors,values})=>(
                  <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label>Enter New Password</label>
                            <input 
                            type='password'
                            name='oldpassword' 
                            className='form-control'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.oldpassword}
                            />
                            <span className='error-message'>{errors.oldpassword}</span>
                        </div>
                        <div className='form-group'>
                            <label>Confirm New Password</label>
                            <input
                             type='password'
                             name='newpassword'
                             className='form-control'
                             onChange={handleChange}
                             onBlur={handleBlur}
                             value={values.newpassword}
                             />
                            <span className='error-message'>{errors.newpassword}</span>
                        </div>
                        
                        <button type='submit' className='btn-bg'>Change Password</button>
                </form>
                )}
            </Formik>
                
           </div>
           )}
           <Heading text={'Email Verification '}/>
            <div className='email'>
                <div className='status-banner'>
                    <Alert variant={`${user.emailVerified?'success':'warning'}`}>
                      {status === 'verification sent'&&!user.emailVerified?(<span>An Email has been sent to {user.email}</span>)
                                                    :(<span>
                                                         Email is {!user.emailVerified&&'not'} verified 
                                                    </span>)}
                       
                    </Alert>
                </div>
                {!user.emailVerified&&(
                    <div className='emailverification'>
                        <h6>Your email ({user.email} ) is {user.emailVerified?'Verified':'not verified Yet'}</h6>
                        <Button variant={`${!status==='verification sent'&&'success'}`} style={{display:!status==='verification sent'?'none':'block'}} onClick={!status==='verification sent'&&verifyEmail()}> 
                        {status==='verification sent'?'':'Verify Now'}
                        </Button>
                    </div>
                )}
            </div>
           {/* <Heading text={'2 Factor Authentication '}/>
            <div className='factor-wrapper'>
                <div className='status-banner'>
                    <Alert variant={`${user.phoneNumber?'success':'warning'}`}>
                        Add or Update your Phone Number
                    </Alert>
                </div>
                <div className='TwoFA-enable'>
                    <div className='div-enable'>
                        <h6>Enable Phone Login Verification</h6>
                        <div><Button variant={`${user.phoneNumber?'success':'warning'}`}>{!user.phoneNumber?'Enable Now':'Enabled'}</Button></div>
                    </div>
                </div>
               
            </div> */}
    </div>
  )
}

export default SecurityComponent