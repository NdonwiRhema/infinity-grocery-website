import React from 'react'

import { useLocation } from 'react-router-dom'

const SingleProductScreen = () => {
    const location = useLocation()
    const prod  = JSON.parse(location.state)
   
  return (
    <div>

            <div>This Page belongs to  : {prod.product}</div>
            <div>Its description  : {prod.desc}</div>

    </div>
  )
}

export default SingleProductScreen