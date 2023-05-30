import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'

const SingleProductScreen = () => {
    const location = useLocation()
    const prod  = JSON.parse(location.state)
   
  return (
    <div>
        <Header/>
            <div>This Page belongs to  : {prod.product}</div>
            <div>Its description  : {prod.desc}</div>
        <Footer/>
    </div>
  )
}

export default SingleProductScreen