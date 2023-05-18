import React from 'react'
import Heading from '../Heading'
import './Places.css'

const Places = () => {
  return (
    <div className='place-holder'>
        <Heading text={'All Pick Up Points'}/>
        <div className='place'>
            <h5>Mendong Marche</h5>
            <p><span>Description : </span> En face Super Marche Preva </p>
            <p><span>Contact /Numero de Telephone : </span> (+237) 650 186 979  </p>
        </div>
        <div className='place place-active'>
            <h5>Marche Acacias</h5>
            <p><span>Description : </span> En face Super Marche Preva </p>
            <p><span>Contact /Numero de Telephone : </span> (+237) 650 186 979  </p>
        </div>
       
    </div>
  )
}

export default Places