import React,{useState}from 'react'

import './Auth.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
import SignUpForm from './SignUpForm'
import Authentic from '../../firebase'


import {signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
const [signUp,setSignUp] = useState(false)


const navigate = useNavigate()
// must contain a capital letter a number and a lowercsase letter and a special charaacter and must be atleadt be 8 chars long.
const Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/


// login submit function 

function LoginSubmit(values){
const email = values.email
const password = values.password
  signInWithEmailAndPassword(Authentic,email,password).then((user)=>{
     navigate('/')
}).catch((e)=>{
    if(  e.message ==='Firebase: Error (auth/user-not-found).'){
  alert("No such User Exists")
  }
    if(  e.message ==='Firebase: Error (auth/invalid-password).'){
  alert("Wrong Password")
  }
})
}

const loginValidationSchema = Yup.object().shape({
  email:Yup.string().email("You need to enter a Valid Email").required('Required'),
  password:Yup.string().required('Required'),
  })
// // Login component
const LoginForm = ()=>{
  return(
    <Formik
            initialValues={{
              email:'',
              password:'',
                    }}
            onSubmit={(values)=>{LoginSubmit(values)}}
            validationSchema={loginValidationSchema}
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
                        placeholder='Email' 
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
                <button
                  type='submit' 
                  className={'btn-bg'}>Sign In</button>
              </div>
              
            </form>
            )}
            
    </Formik>
  )
}

 return (
    <div>
        <div className='form'>
          <div className='form-title'>
                      <h4> {signUp ? 'Sign Up':'Sign In'} </h4>
                      <h6>Glad to have you . Let's get you {signUp ? 'an Account':'signed In'} </h6>
          </div>
          {!signUp?(
            <LoginForm/>
          ):(
            <SignUpForm/>
            )}
          <p>{!signUp?"Don't Have an Account ? ":'Already have an Account ?'}
                <span onClick={()=>setSignUp(!signUp)}>{!signUp?'Sign Up Now':'Sign In Now'}</span>
                <br/>
          </p>
        </div>
    </div>
  )
}

export default Auth