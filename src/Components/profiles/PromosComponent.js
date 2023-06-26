import React from 'react'
import Heading from '../Heading'
import './PromosComponent.css'

const PromosComponent = () => {
  return (
    <div className='Promos-wrapper'>
        <Heading text={'All Promotions'}/>
            <div className='no-promos'>
                 <h6>No promotions Yet....</h6>
            </div>
            
    </div>
  )
}

export default PromosComponent