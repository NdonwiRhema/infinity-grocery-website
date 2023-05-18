import React from 'react'
import './Map.css'
const Map = ({location}) => {
  return (
    <div className='maps'>
   {
  location === 'Mendong'?
  (<iframe  className='map'title='mendong' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.8049980176543!2d11.470622063483615!3d3.8359320950320086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bce2faab2771b%3A0x1c4efac0d5fc8e39!2sMendong%20Market!5e0!3m2!1sen!2scm!4v1684407085707!5m2!1sen!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>)
  :
      location === 'Acacias'?
                        (<iframe className='map' title='acacias' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.4276495871227!2d11.486265800764663!3d3.8412238552943117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcf1afa0af5%3A0xad041dcc8c6d883!2sAcacias%20Market!5e0!3m2!1sen!2scm!4v1684407639761!5m2!1sen!2scm" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>)
                        :''
 
 }
        
    </div>
  )
}

export default Map