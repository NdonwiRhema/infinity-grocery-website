import React,{useState} from 'react'
import Heading from '../Heading'
import './Places.css'

const Places = ({setPlace}) => {
  const [active,setActive]=useState('mendong')
  const handleActive = (place)=>{
    setActive(place)
    switch (place) {
      case 'mendong':
          setPlace('mendong')
        break;
    
      case 'acacias':
          setPlace('acacias')
        break;
    
      default:
        setPlace('mendong')
        break;
    }
    
  }
  return (
    <div className='place-holder'>
        <Heading text={'All Pick Up Points'}/>
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