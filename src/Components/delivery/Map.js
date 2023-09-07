import React from 'react'
import './Map.css'
const Map = ({location}) => {
  
  return (
    <div className='maps'>
      <iframe  className='map' title={location.place}
       src={location.src}
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  )
}

export default Map