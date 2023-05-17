import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import SlideShow from '../Components/VideoSlide/SlideShow'
import RecipeBody from '../Components/RecipeBody'

const RecipeScreen = () => {
  return (
    <div>
        {/* // Header */}
    <Header/>
    {/* //SlideShow */}
    <SlideShow/>
    
    {/* //Body */}
    <RecipeBody/>

    {/* //Footer */}
    <Footer/>
    </div>
  )
}

export default RecipeScreen