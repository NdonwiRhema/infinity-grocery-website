import React from 'react'

import Carousels from '../../Components/Carousels'
import Promotions from '../../Components/Promotions'
import CategoryShow from '../../Components/CategoryShow'
import Featured from '../../Components/Featured'



const HomeScreen = () => {
  return (
   <div>
     
        {/*  Carousel Section .. */}
            <Carousels data={false}/>
        {/*  Promotions Section.. */}
            <Promotions/>
        {/*  Product Categories Section .. */}
            <CategoryShow/>
        {/*  Featured Products.. */}
            <Featured/>
  
    </div>
  )
}

export default HomeScreen