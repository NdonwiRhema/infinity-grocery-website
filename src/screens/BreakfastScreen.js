import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import BreakFastBody from '../Components/BreakFastBody'

const BreakfastScreen = ({title}) => {
  return (
    <div>
        {/* Header .. */}
        <Header/>

        {/*Body .. */}
        <BreakFastBody title={title}/>
        
        {/* Footer .. */}
       <Footer/>
    </div>
  )
}

export default BreakfastScreen