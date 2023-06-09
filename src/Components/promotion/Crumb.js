import React from 'react'
import { FaAngleRight } from 'react-icons/fa'

import './Crumb.css'
const Crumb = () => {
  return (
    <div>
      <div className='crumb-holder'>
        <h6><a href='/promotion'>Weekly</a></h6>
        <FaAngleRight fontSize={12}/>
        <h6>Breakfast Grocery Basket</h6>
      </div>
    </div>
  )
}

export default Crumb
