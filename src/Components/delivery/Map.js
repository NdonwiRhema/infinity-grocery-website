import React from 'react'
import './Map.css'
const Map = ({location}) => {
  
  return (
    <div className='maps'>
      <iframe  className='map' title={location.place}
       src={location.src===''?
       "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15923.288399514184!2d11.490782314612249!3d3.8483339539770096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfc10104abd1%3A0x4ec011919a111a8e!2sCarrefour%20Scalom!5e0!3m2!1sen!2scm!4v1694282882333!5m2!1sen!2scm"
                    :location.src}
       allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
      </iframe>
      
    </div>
  )
}


export default Map