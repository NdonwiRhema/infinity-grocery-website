import React,{useState} from 'react'
import Heading from '../Heading'
import './Places.css'
import { useSelector } from 'react-redux'
import { French } from '../utils/FrenchTranslation'

const Places = ({setPlace}) => {
  const [active,setActive]=useState('')
  const language = useSelector((state)=>state.language.data)
  const handleActive = (place)=>{
    setActive(place)
    setPlace()
  }
  return (
    <div className='place-holder'>
        <Heading text={language==='en'?'Delivery Locations':French.delivery.title}/>
        <div className={`place ${active==='mendong'?'place-active':''}`}>
           <button onClick={()=>handleActive('mendong')} className='placeSwitch'>
              <h5>Mendong Marche</h5>
           </button>
            <p><span>Description : </span> En face Super Marche Preva </p>
            <p><span>Contact /Numero de Telephone : </span> (+237) 650 186 979  </p>
        </div>
        <div className={`place ${active==='acacias'?'place-active':''}`}>
            <button onClick={()=>handleActive('acacias')} className='placeSwitch'>
                   <h5>Marche Acacias</h5>
              </button>
           
            <p><span>Description : </span> En face Super Marche Preva </p>
            <p><span>Contact / Numero de Telephone : </span> (+237) 650 186 979  </p>
        </div>
       
    </div>
  )
}

export default Places