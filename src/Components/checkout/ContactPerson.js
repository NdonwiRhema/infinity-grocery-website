import React,{ useRef, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {setActiveLocation } from '../../app/features/locationSlice'
import Heading from '../Heading'
import { setdeliveryCharge } from '../../app/features/cartSlice'
// import { pull } from '../utils/FirebaseOperations'
import { useStore } from 'react-redux'
import { French } from '../utils/FrenchTranslation'

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
  const language = useSelector((state)=>state.language.data)


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
    const addrs = locationRef.current.value.split('+')   
    const fullAddress = authUser.Address?authUser.Address:addrs[0]+'-'+subLocationRef.current.value+'-'+descRef.current.value
    const contactData ={
           owner:contactRef.current.value,
           contact:phoneRef.current.value,
           ownerAddress:fullAddress,
           ownerTown:!authUser?townRef.current.value:'Yaounde',
    }
    setCheck({complete:true,
                contactData:contactData
            })
  console.log(contactData)
}

  return (
    <div>
        <Heading text={language === 'en'?'Contact Information':French.checkOut.title}/>
       
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='form-group'>
            <label>{language==='en'?'Contact Person':French.checkOut.name}</label>
            <input ref={contactRef}
             className='form-control'
              placeholder={`${authUser.username ?authUser.username:'e.g. Jane Johnson '}`}
              value={authUser.username && authUser.username} 
              disabled={authUser.username&&true}
              required/>
        </div>
        <div className='form-group'>
            <label>{language === 'en'?'Phone Number':French.checkOut.phone}</label>
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
            <label>{authUser.Address?language ==='en'?'My Address':'Mon Addresse':language ==='en'?'Town':'Ville'}</label>
            {authUser.Address?(
              <input
              className='form-control'
              placeholder={`${ authUser.Address ?authUser.Address:language==='en'?'Enter the Town you live In .':'Votre Ville'}`}
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
                 <option value={'Yaounde'}>Yaounde</option>
               
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
             <label>{language === 'en'?'SubLocation':French.checkOut.sublocation}</label>
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
              <label>{language==='en'?'Additional Description':French.checkOut.desc}</label>
              <textarea required ref={descRef} className='form-control'></textarea>
            </>
          )}
        </div>
        <div className='form-group'>
          <button className='btn-bg' type='submit'>{language ==='en'?'Proceed To Payment':French.checkOut.payment}</button>
    
        </div>
         </form>

    </div>
  )
}

export default ContactPerson
