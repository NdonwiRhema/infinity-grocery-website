import React, { useRef, useState } from 'react'
import './ResetPassword.css'
import { sendPasswordResetEmail } from 'firebase/auth'
import Authentic from '../../firebase'
import { Alert } from 'react-bootstrap'


const ResetPassword = () => {
    const EmailRef = useRef(null)
    const [error,setError] = useState('')
    const [successful,setSuccessful] = useState(false)
    const SendResetMail =(e)=>{
        e.preventDefault()
        sendPasswordResetEmail(Authentic,EmailRef.current.value).then(()=>{
            setSuccessful(true)
        }).catch((e)=>{
            let msg = ''
            switch(e.message){
                case 'Firebase: Error (auth/user-not-found).':
                    msg='No such User Exists'
                    break;
                default:
                    msg = ''
                    break;
            }
            setError(msg)
            console.warn(e.message)
        })
    }
  return (
    <div className='reset-password-container'>
      <h3>Reset Password</h3>
      {
        successful?(<div className='response-bar'>
        <Alert variant='success'>Reset Email sent to {EmailRef.current !== null&&EmailRef.current.value}</Alert>
      </div>):''
      }
      <div className='reset-password-form'>
            <form onSubmit={(e)=>SendResetMail(e)}>
                <div className='form-group'>
                             <input
                                className='form-control'
                                placeholder='Enter your Email'
                                ref={EmailRef}
                                />
                           {error.length>0?( <span className='error-email'>{error}</span>):''}
                </div>
                <div className='reset-password-submit'>
                    <button type='submit' className='btn-bg'>Send Reset Password Email</button>
                </div>
            </form>
      </div>
    </div>
  )
}

export default ResetPassword
