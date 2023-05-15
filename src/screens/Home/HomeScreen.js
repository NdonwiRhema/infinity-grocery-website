import React from 'react'
import Header from '../../Components/Header'
import Carousels from '../../Components/Carousels'
import Promotions from '../../Components/Promotions'
import CategoryShow from '../../Components/CategoryShow'
import Featured from '../../Components/Featured'
import Footer from '../../Components/Footer'


const HomeScreen = () => {
  return (
   <div>
        {/* // Header Section .. */}
            <Header/>
        {/*  Carousel Section .. */}
            <Carousels/>
        {/*  Promotions Section.. */}
            <Promotions/>
        {/*  Product Categories Section .. */}
            <CategoryShow/>
        {/*  Featured Products.. */}
            <Featured/>
        {/*  Footer Section .. */}
            <Footer/>
    </div>
  )
}

export default HomeScreen