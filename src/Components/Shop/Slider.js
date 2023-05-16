import React from 'react'
import './Slider.css'
import {  FaMinusCircle, FaPlusCircle } from 'react-icons/fa'

const Slider = ({min,max}) => {

  return (
    <div>
        
        <div id='slider'>
            <div id='slider-fill' style={{width:'90%'}}>
                <div id='slider-thumb-left'></div>
                <div id='slider-thumb-right'></div>
            </div>
        </div>
        <div id='slider-controls'>
            <FaMinusCircle fontSize={12}/>
            <h6> {min} FCFA - {max} FCFA</h6>
            <FaPlusCircle fontSize={12}/>
        </div>
        
    </div>
    
  )
}

export default Slider