import { Formik } from 'formik'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { updatePhoneNumber, updateProfile,} from 'firebase/auth'
import Authentic,{db} from '../../firebase'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import {FaAngleDown} from 'react-icons/fa'
import './InfoComponent.css'
import { pullAll } from '../utils/FirebaseOperations'


const phoneLen = 9
const Regex = /^([5-6]\d{8})$/ // regex for a cameroonian number
const InfoSchema = Yup.object().shape({
    username:Yup.string(),
    email:Yup.string().email('You need to enter a valid Email'),
    telephone:Yup.string()
    .matches(Regex,{message:'Incorrect Phone Number check Again.'})
    .max(phoneLen).required('required'),
    address:Yup.string().required('required'),
    preferredLocation:Yup.string('required'),
    addedLocation:Yup.string().max(30).required('Cannot be blank')
})


const InfoComponent = (setRefresh) => {
const User = Authentic.currentUser
const[countryCode,setCountryCode] = useState('cm')
const[drop,setDrop]=useState(false)
 const [dbData,setDbData]= useState([])
 const[locations,setLocations]=useState([])
 const[sublocations,setsubLocations]=useState(
    {
        all:[],
        LocationId:''
    }
 )


 useEffect(()=>{
        const docRef = doc(db,"Users",User.uid)
       try {
        getDoc(docRef).then((docSnapshot)=>{
            if(docSnapshot.exists()){
                const db_data = docSnapshot.data()
                setDbData(db_data)
            }
        getLocations()
        })
       } catch (error) {
        console.warn(error)
       }
     },[])
  
  const tempName = User.email.split('@')

// update Info Submission ..  
  function UpdateInfo(values){
        const currentUserInfo = Authentic.currentUser
        const username =values.username
        const telephone = values.telephone
        const preferredLocation = values.preferredLocation
        const addedLocation = values.addedLocation
        const address = values.address
     try {
            const docRef = doc(db,"Users",currentUserInfo.uid)   
            updateDoc(docRef,{
                username:username,
                telephone:telephone,
                location:address,
                Address:address+' - '+preferredLocation+' - '+addedLocation,
                country:countryCode,
                lastModified:Date.now().toLocaleString()
               })
           alert('User Profile Successfully Updated')
           setRefresh(true)
           window.location.reload()
        } catch (error) {
            console.log(error)
        }
                                                                            
}
function getLocations(){
    pullAll("Locations").then(response=>{
        let tempArr =[]
          response.forEach(item =>{
              const categoryData = item.data()
              tempArr.push(categoryData)
            //   setLocations((prevState)=>[...prevState,categoryData])
                })
            setLocations(()=>tempArr.sort((a,b)=>{
            let x= a.quarter.toLowerCase()
            let y= b.quarter.toLowerCase()
           if(x>y){
            return 1
           }
        else{
            return -1
        }
        }))
     })
}
function changeLocation(e){
    const quarter = e.target.value
   const quarterData = quarter && quarter !==''? locations.filter((item)=>item.quarter === quarter).pop():[]
   setsubLocations({all:quarterData.subLocations&&quarterData.subLocations.sort(),LocationId:quarterData.id})
  
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
            address :'',
            addedLocation:''
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
                                        <li onClick={()=>{
                                            setCountryCode('cm')
                                            setDrop(false)
                                        }}> 
                                            <img src='https://flagcdn.com/16x12/cm.png' alt='contry-flag'/>
                                        <span> (+237 ) Cameroon</span> 
                                        </li>
                                        {/* <li onClick={()=>setCountryCode('za')}> 
                                            <img src='https://flagcdn.com/16x12/za.png' alt='contry-flag'/>
                                            <span> (+ ) South Africa</span> 
                                        </li> */}
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
                        <label>Address-(My Quarter)</label>
                        <span className='error-message'>{errors.address}</span>
                            <select
                                name='address'
                                className='form-control' 
                                onChange={(e)=>{
                                         changeLocation(e)
                                         handleChange(e)
                                        }}
                                onBlur={handleBlur}
                                value={values.address}
                            >
                                <option></option>
                                {locations&&locations.length>0?locations.map((location,index)=>(
                                    <option
                                      key={index}
                                      id={location.id}
                                      value={location.quarter}
                                       >
                                        {location.quarter}
                                    </option>
                                )):(
                                    <></>
                                )}
                               
                            </select>
                    </div>
                    <div className='form-group'>
                        <label>SubLocation</label>
                        <select name='preferredLocation'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form-control'
                        >
                            <option></option>
                            {sublocations.all&&sublocations.all.length>0?sublocations.all.map((subs,index)=>(
                               <option key={index} value={subs}>{subs}</option>
                            )):(
                                <></>
                            )}
                        </select>
                    </div>  
                    <div className='form-group'>
                        <label>Added Description :</label>
                        <input
                            name='addedLocation'
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='form-control'
                            placeholder='e.g Opposite hopital Biyemassi (En face pharmacie Etienne)'
                        />
                       <span className='error-message'>{errors.addedLocation}</span>
   
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