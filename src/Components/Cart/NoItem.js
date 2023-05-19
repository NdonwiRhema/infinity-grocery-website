import React from 'react'
import './NoItem.css'

const NoItem = ({text}) => {
  return (
    <div className='no-item-container'>
        <p>{text}</p>
    </div>
  )
}

export default NoItem