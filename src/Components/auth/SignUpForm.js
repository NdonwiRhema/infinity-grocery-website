import React,{useState}from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Authentic, { db } from '../../firebase'
import { doc, setDoc } from 'firebase/firestore'


const SignUpForm = () => {
    // regisyter function 
 const [regUser,setRegUser] = useState()
function Register (values){
    const email = values.email
    const password = values.password
       const newUser = {
        userId : regUser?regUser.uid:'',
        username: values.username,
        email: email,
        password: password,
        telephone:values.telephone,
        location:'',
        type:'user/user',
        isAdmin: false,
        isSuperAdmin: false,
        profile_pic:'',
        language:'en',
        Address: '',
        lastModified:Date.now().toLocaleString(),
        created_at: Date.now().toLocaleString(),
    }
    
  createUserWithEmailAndPassword(Authentic,email,password).then((user)=>{
    console.log(user)
    setRegUser(user.user)
    try {
        setDoc(doc(db,"Users",user.user.uid),newUser).then(()=>alert("All Done. Welcome to the Big Family !"))
    } catch (error) {
        alert("Oops we seem to have a problem. :"+error.message)
    }
    
  }).catch((error)=>{
      if(  error.message ==='Firebase: Error (auth/email-already-exists).'){
        alert("Sorry but this email already exists on our System")
        }
    })



}

    const Regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    const phoneRegex =  /^([5-6]\d{8})$/ // regex for a cameroonian number
    const signUpValidationSchema = yup.object().shape({
        email:yup.string().email("You need to enter a Valid Email").required('Required'),
        username:yup.string().required('Required'),
        telephone:yup.string('phone Number must be a valid Cameroonian Number').matches(phoneRegex,{message:'The Phone Number must be a valid Cameroonian Number'}).required('Required'),
        password:yup.string()
                    .matches(Regex,{message:'Password must have 1 special character, 1uppercase,1lowerCase, minlength of 8'})
                    .min(8).required('Required'),
        confirmPassword:yup.string()
                    .oneOf([yup.ref('password')],'Please passwords must match')
                    .required('Required'),
      
      })
  return (
    <div>
        <Formik
            initialValues={{
                email:' ',
                username:'',
                password:'',
                telephone:'',
                confirmPassword:''
            }}
            validationSchema={signUpValidationSchema}
            onSubmit={(values)=>Register(values)}      
        >
            {({handleBlur,handleChange,handleSubmit,values,errors})=>(
                <form onSubmit={handleSubmit}>
                    <div className='SignUp-form'>
                            <div className='form-group'>
                                <input
                                style={{border:errors.message?'1px solid solid':'none'}} 
                                name='username'
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Username'
                                className= 'form-control'  
                                type='text'
                                required/>
                                <span className='error-message'>{errors.username}</span>
                            </div>
                            <div className='form-group'>
                                <input
                                style={{border:errors.message?'1px solid solid':'none'}} 
                                name='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Email'
                                className= 'form-control'  
                                type='email'
                                required/>
                                <span className='error-message'>{errors.email}</span>
                            </div>
                            <div className='form-group'>
                                <input
                                style={{border:errors.message?'1px solid solid':'none'}} 
                                name='telephone'
                                value={values.telephone}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                placeholder='Telephone Number'
                                className='form-control' 
                                type='tel' required/>
                           
                           <span className='error-message'>{errors.telephone}</span>

                            </div>
                            <div className='form-group'>
                                <input
                                style={{border:errors.message?'1px solid solid':'none'}} 
                                name='password'
                                placeholder='Password' 
                                className='form-control' 
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type='password'
                                required/>
                           <span className='error-message'>{errors.password}</span>

                            </div>
                            <div className='form-group'>
                                <input
                                style={{border:errors.message?'1px solid solid':'none'}} 
                                name='confirmPassword'
                                placeholder='Reenter Password'
                                value={values.confirmPassword}
                                onChange={handleChange}
                                className={`form-control`} 
                                type='password' required/>
                           <span className='error-message'>{errors.confirmPassword}</span>

                            </div>
                    </div>
                    <div className='submit-grp'>
                        <button  type='submit' 
                                className={'btn-bg'}>Sign Up</button>
                   </div>
                </form> 
            )}
           
        </Formik>
    </div>
  )
}

export default SignUpForm