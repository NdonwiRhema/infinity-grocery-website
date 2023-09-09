import React,{useEffect, useState} from 'react'
import Heading from '../Heading'
import './Places.css'
import { useDispatch, useSelector } from 'react-redux'
import { French } from '../utils/FrenchTranslation'

import { locationThunk } from '../../app/features/locationSlice'

const Places = ({setPlace}) => {
  const dispatch = useDispatch()
  const [active,setActive]=useState('')
  const language = useSelector((state)=>state.language.data)
  const Locations = useSelector((state)=>state.locations.data)
  const handleActive = (place,uri)=>{
    setActive(place)
    setPlace({
      place:place,
      src:uri,
    })
  }
  const subLocate =(stringArr) =>{
    let sorted = stringArr
    let stringSorted =''
    for (let index = 0; index < sorted.length; index++) {
      const element = sorted[index];
      stringSorted += element+', '
    }
    return stringSorted
  }
  useEffect(()=>{
    dispatch(locationThunk())

  },[dispatch])
  return (
    <div className='place-holder'>
      <Heading text={language==='en'?'Delivery Time':French.delivery.deliveryTime}/>
        <div className='horaires'>
          <div className='horaires-period'><h6>{language==='en'?'DayTime Delivery ':French.delivery.dayTime}</h6><hr/></div>
          <div className='horaires-period-body'>
            <span>{language==='en'?'Monday - Friday':French.delivery.days}</span>
            <span>{language==='en'?'11am - 2pm':French.delivery.morningHour}</span>
          </div>
          <div className='horaires-period'><h6>{language==='en'?'Evening Delivery ':French.delivery.dayTime}</h6><hr/></div>
          <div className='horaires-period-body'>
            <span>{language==='en'?'Monday - Friday ':French.delivery.days}</span>
            <span>{language==='en'?'5pm - 7pm ':French.delivery.eveningHour}</span>
          </div>
        </div>
        <Heading text={language==='en'?'Delivery Locations':French.delivery.deliveryPoints}/>
      {
        Locations.length > 0 && Locations.map((location,index)=>(
            <div key={index} className={`place ${active===location.quarter?'place-active':''}`}>
              <button onClick={()=>handleActive(location.quarter,location.uri)} className='placeSwitch'>
                <h5>{location.quarter} </h5>
              </button>
              <p>{language === 'en' ?'Receive your deliveries in the whole Zone ':French.delivery.locations}</p>
              <p>({subLocate(location.subLocations)})</p>
            </div>
        ))
      }

   </div>
  )
}

export default Places