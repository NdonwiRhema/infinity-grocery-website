import React,{ useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setActiveLocation } from '../../app/features/locationSlice'
import Heading from '../Heading'
import { setdeliveryCharge } from '../../app/features/cartSlice'
// import { pull } from '../utils/FirebaseOperations'
import { useStore } from 'react-redux'

const ContactPerson = ({setCheck,authUser}) => {
   const dispatch = useDispatch()
   const [ActiveSubLocations,setActiveSubLocations] = useState([])
   const locationRef = useRef(null)
   const contactRef = useRef(null)
   const phoneRef = useRef(null)
   const townRef = useRef(null)
   const subLocationRef = useRef(null)
   const descRef = useRef(null)
  const freshState = useStore()
  console.log(ActiveSubLocations)
  const data = useSelector((state)=>state.locations.data)


const handleChange = (e)=>{
    const all =  e.target.value.split('+')
    const subs = all[1].split(',')
     dispatch(setActiveLocation(subs))
     const quarterData = data.filter((item)=> item.quarter === all[0])
     dispatch(setdeliveryCharge(quarterData))
    setActiveSubLocations(freshState.getState().locations.activeLocation)
  }
const handleSubmit = (e)=>{
    e.preventDefault()
    const addrs = !authUser&&locationRef.current.value.split('+')
    const fullAddress = authUser?authUser.Address:addrs[0]+'-'+subLocationRef.current.value+'-'+descRef.current.value
    const contactData ={
           owner:contactRef.current.value,
           contact:phoneRef.current.value,
           ownerAddress:fullAddress,
           ownerTown:!authUser?townRef.current.value:'Yaounde',
    }
    setCheck({complete:true,
                contactData:contactData
            })
}

  return (
    <div>
        <Heading text={'Contact Information'}/>
       
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='form-group'>
            <label>Contact Person</label>
            <input ref={contactRef}
             className='form-control'
              placeholder={`${authUser.username ?authUser.username:'e.g. Jane Johnson '}`}
              value={authUser.username && authUser.username} 
              disabled={authUser.username&&true}
              required/>
        </div>
        <div className='form-group'>
            <label>Phone Number</label>
            <input
            ref={phoneRef}
            type='tel'
            pattern='([5-6]\d{8})'
            className='form-control'
            placeholder={`${authUser.telephone ?authUser.telephone:'valid Cameroonian Number e.g 650186979'}`}
            value={authUser.telephone && authUser.telephone} 
            disabled={authUser.telephone&&true}
            required/>
        </div>
        <div className='form-group'>
            <label>{authUser.Address?'My Address':'Town'}</label>
            {authUser?(
              <input
              className='form-control'
              placeholder={`${ authUser.Address ?authUser.Address:'valid Cameroonian Number e.g 650186979'}`}
              value={authUser.Address && authUser.Address} 
              disabled={authUser.Address&&true}
              required
              />
            ):(
              <select
              required
              className='form-control'
              ref={townRef}>
                 <option></option>
                 <option>Yaounde</option>
               
             </select>
            )}
        </div>
        <div className='form-group'>
            <label>Location(Quartier)</label>
           {!authUser.username?(<select required
            id='Quarter'
            ref={locationRef} 
            className='form-control'
            onChange={(e)=>handleChange(e)}>
            <option></option>
            {
                data.length>0&&data.map((location,index)=>(
                     <option key={index} value={location.quarter+'+'+location.subLocations}>{location.quarter}</option>
                ))
            }
          </select>):(
            <input
              className='form-control'
              placeholder={`${authUser.Address ?authUser.Address:'valid Cameroonian Number e.g 650186979'}`}
              value={authUser.Address && authUser.Address} 
              disabled={authUser.Address&&true}
              required
              />
          )}
        </div>
        <div className='form-group'>
           {!authUser.username&&(
            <>
             <label>SubLocation</label>
              <select required className='form-control' ref={subLocationRef}>
                <option></option>
                {
                  ActiveSubLocations.length>0 ? ActiveSubLocations.map((location,index)=> (
                         <option
                          value={location}
                          key={index}>{location}</option>
                    )):('')
                }
             </select>
            </>
           )}
        </div>
        <div className='form-group'>
          {!authUser.username&&(
            <>
              <label>Additional Description</label>
              <textarea required ref={descRef} className='form-control'></textarea>
            </>
          )}
        </div>
        <div className='form-group'>
          <button className='btn-bg' type='submit'>Proceed To Payment</button>
    
        </div>
         </form>

    </div>
  )
}

export default ContactPerson
