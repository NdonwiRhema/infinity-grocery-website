import React,{useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { locationThunk, setActiveLocation } from '../../app/features/locationSlice'
import Heading from '../Heading'
import { setdeliveryCharge } from '../../app/features/cartSlice'

const ContactPerson = ({setCheck}) => {
   const dispatch = useDispatch()
   const locationRef = useRef(null)
   const contactRef = useRef(null)
   const phoneRef = useRef(null)
   const townRef = useRef(null)
   const subLocationRef = useRef(null)
   const descRef = useRef(null)

   const data = useSelector((state)=>state.locations.data)
  const activelocation = useSelector((state)=>state.locations.activeLocation)

const handleChange = (e)=>{
    const all = e.target.value.split('+')
    console.log(all)
     const subs = all[1].split(',')
      dispatch(setActiveLocation(subs))
    const quarterData = data.filter((item)=> item.quarter === all[0])
   console.log(quarterData)
    dispatch(setdeliveryCharge(quarterData))
 }
const handleSubmit = (e)=>{
    e.preventDefault()
    const addrs = locationRef.current.value.split('+')
    const contactData ={
            owner:contactRef.current.value,
             contact:phoneRef.current.value,
             ownerAddress:addrs[0]+'-'+subLocationRef.current.value+'-'+descRef.current.value,
             ownerTown:townRef.current.value,
    }
   
    setCheck({complete:true,
                contactData:contactData
            })
}
useEffect(()=>{
    dispatch(locationThunk())
},[dispatch])

  return (
    <div>
        <Heading text={'Contact Information'}/>
       
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div className='form-group'>
            <label>Contact Person</label>
            <input ref={contactRef}
             className='form-control'
              placeholder='e.g. Jane Doe '  required/>
        </div>
        <div className='form-group'>
            <label>Phone Number</label>
            <input
            ref={phoneRef}
            type='tel'
            pattern='([5-6]\d{8})'
             className='form-control'
              placeholder='valid Cameroonian Number e.g 650186979'  required/>
        </div>
        <div className='form-group'>
            <label>Town</label>
            <select required className='form-control' ref={townRef}>
                <option></option>
                <option>Yaounde</option>
              
            </select>
        </div>
        <div className='form-group'>
            <label>Location(Quartier)</label>
           <select required
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
          </select>
        </div>
        <div className='form-group'>
            <label>SubLocation</label>
            <select required className='form-control' ref={subLocationRef}>
                <option></option>
                {
                  activelocation.length>0 ?  activelocation.map((location,index)=> (
                         <option
                          value={location}
                          key={index}>{location}</option>
                    )):('')
                }
           </select>
        </div>
        <div className='form-group'>
            <label>Additional Description</label>
            <textarea required ref={descRef} className='form-control'></textarea>
        </div>
        <div className='form-group'>
          <button className='btn-bg' type='submit'>Proceed To Payment</button>
    
        </div>
         </form>

    </div>
  )
}

export default ContactPerson
