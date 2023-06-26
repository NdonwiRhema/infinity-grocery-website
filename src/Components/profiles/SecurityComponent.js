import React from 'react'
import './SecurityComponent.css'
import Heading from '../Heading'
import { useSelector } from 'react-redux'
import { Alert, Button } from 'react-bootstrap'
const SecurityComponent = () => {
    const user = useSelector((state)=>state.user.data.user)
  return (
    
    <div className='security-wrapper'>
            {/* <h4>Update your Passwords </h4> */}
            <Heading text={'Update your Passwords '}/>
           <div className='password-form'>
                <form>
                        <div className='form-group'>
                            <label>Enter New Password</label>
                            <input className='form-control'/>
                        </div>
                        <div className='form-group'>
                            <label>Confirm New Password</label>
                            <input className='form-control'/>
                        </div>
                        
                        <button type='submit' className='btn-bg'>Change Password</button>
                   
                </form>
           </div>
           <Heading text={'Email Verification '}/>
            <div className='email'>
                <div className='status-banner'>
                    <Alert variant={`${user.emailVerified?'success':'warning'}`}>
                        Email not verified
                    </Alert>
                </div>
                {!user.emailVerified&&(
                    <div className='emailverification'>
                        <h6>Your email ({user.email} ) is not verified Yet</h6>
                        <Button variant='success'> Verify Now</Button>
                    </div>
                )}
            </div>
           <Heading text={'2 Factor Authentication '}/>
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
                {/* {!user.emailVerified&&(
                    <div className='phoneverification'>
                        <h6>Your email ({user.email} ) is not verified Yet</h6>
                        <Button variant='success'> Verify Now</Button>
                    </div>
                )} */}
            </div>
    </div>
  )
}

export default SecurityComponent