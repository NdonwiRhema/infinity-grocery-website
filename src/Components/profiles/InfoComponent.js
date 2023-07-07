import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { updatePhoneNumber, updateProfile } from 'firebase/auth'
import Authentic,{db} from '../../firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import {FaAngleDown} from 'react-icons/fa'
import './InfoComponent.css'


const phoneLen = 9
const Regex = /^([5-6]\d{8})$/ // regex for a cameroonian number
const InfoSchema = Yup.object().shape({
    username:Yup.string(),
    email:Yup.string().email('You need to enter a valid Email'),
    telephone:Yup.string()
    .matches(Regex,{message:'Incorrect Phone Number check Again.'})
    .max(phoneLen).required('required'),
    address:Yup.string().required('required'),
    preferredLocation:Yup.string()
})


const InfoComponent = () => {
  const User = Authentic.currentUser
  const[countryCode,setCountryCode] = useState('cm')
  const[drop,setDrop]=useState(false)
 const [dbData,setDbData]= useState([])

 useEffect(()=>{
        const docRef = doc(db,"Users",User.uid)
        getDoc(docRef).then((docSnapshot)=>{
            if(docSnapshot.exists()){
                const db_data = docSnapshot.data()
                setDbData(db_data)
            }
        })
     },[])
  
  const tempName = User.email.split('@')

// update Info Submission ..  
  function UpdateInfo(values){
        const currentUserInfo = Authentic.currentUser
        const username =values.username
        const telephone = values.telephone
        const preferredLocation = values.preferredLocation
        const address = values.address
  
        updateProfile(currentUserInfo,{
                    displayName:username,
                }).then(()=>{
                  }).catch((e)=>console.log(e))
        updatePhoneNumber(currentUserInfo,{phoneNumber:telephone})
        const docRef = doc(db,"Users",currentUserInfo.uid)   
        try {
            updateDoc(docRef,{
                username:username,
                telephone:telephone,
                location:preferredLocation,
                Address:address,
                country:countryCode,
                lastModified:Date.now().toLocaleString()
               })
            alert('User Profile Successfully Updated')
           
        } catch (error) {
            console.log(error)
        }
                                                                            
}
console.log(dbData)
   return (
    <div id='info'>
        <Formik
         initialValues={{
            username :User.displayName?User.displayName:tempName[0],
            email :User.email,
            telephone :!User.phoneNumber?dbData.telephone:User.phoneNumber,
            preferredLocation :dbData?dbData.location:'',
            address :dbData?dbData.Address:'',
        }
         }
         validationSchema={InfoSchema}
         onSubmit={(values)=>{UpdateInfo(values)}}
        >
            {({handleBlur,handleChange,handleSubmit,values,errors})=>(
            <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Username</label>
                        <input 
                            name='username'
                            className='form-control'
                            placeholder={User.displayName?User.displayName:tempName[0]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.username}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input 
                            name='email'
                            type='email'
                            className='form-control'
                            placeholder={User.email}
                            onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                            />
                    </div>
                    <div className='form-group'>
                        <label>Telephone</label>
                        <span className='error-message'>{errors.telephone}</span>
                        <div className='country-flag'> 
                            <div className='emoji-grp'>
                                <div className='emoji'>
                                    <img src={`https://flagcdn.com/16x12/${countryCode}.png`} width={15} height={15} alt={countryCode}/>
                                    <span>(+237) Cameroon</span>
                                    <FaAngleDown onClick={()=>setDrop(!drop)} fontSize={14}/>
                                </div>
                            { drop&&(
                                <div className='emoji-dropdown'>
                                    <ul>
                                        <li onClick={()=>setCountryCode('cm')}> 
                                            <img src='https://flagcdn.com/16x12/cm.png' alt='contry-flag'/>
                                        <span> (+237 ) Cameroon</span> 
                                        </li>
                                        <li onClick={()=>setCountryCode('za')}> 
                                            <img src='https://flagcdn.com/16x12/za.png' alt='contry-flag'/>
                                            <span> (+ ) South Africa</span> 
                                        </li>
                                    </ul>
                                </div>
                                )
                            }
                            </div>
                            <input 
                                title='telephone'
                                name='telephone'
                                type='tel' 
                                className='form-control' 
                                placeholder='Enter A valid phone Number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.telephone}
                            />
                        </div>
                    </div>
                    <div className='form-group'>
                        <label>Address</label>
                        <span className='error-message'>{errors.address}</span>
                        <input
                        name='address'
                        className='form-control' 
                        placeholder='Enter Your Address Line'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        />
                    </div>
                    <div className='form-group'>
                        <label>Preferred Pick Point</label>
                        <select name='preferredLocation'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form-control'
                        >
                            <option value='Acacias' selected={ dbData.location==='Acacias'&&'selected'}>Acacias</option>
                            <option value='Mendong'>Mendong</option>
                            <option value='Emmana'>Emmana</option>
                            <option value='Simbok'>Simbok</option>
                            <option value='Biyem-Assi'>Biyem-Assi</option>
                            <option value='Essos'>Essos</option>
                        </select>
                        
                    </div>               
                <div className='form-group'>
                    <button type='submit' className='btn-bg'>Update Profile</button>
                </div>            
            </form>
            )}
        </Formik>
       
    </div>
  )
}

export default InfoComponent