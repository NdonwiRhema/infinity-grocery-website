import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ShopContent from '../Components/ShopContent'

const ShopScreen = () => {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Banner Shop Now */}

        {/* Body */}
        <ShopContent/>
        
        {/* Footer */}
        <Footer/>
      
    </div>
  )
}

export default ShopScreen
