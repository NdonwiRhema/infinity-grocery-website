import React,{useEffect} from 'react'


import Carousels from '../../Components/Carousels'
import Promotions from '../../Components/Promotions'
import CategoryShow from '../../Components/CategoryShow'
import Featured from '../../Components/Featured'
import {  pullWhere } from '../../Components/utils/FirebaseOperations'
import { loadLocalStorage, pullLocalStorage } from '../../Components/utils/LocalStorageOperations'

const HomeScreen = () => {
function LoadCarousels () {
    pullWhere("Ui",'status','active','==').then(response=>{
        let tempArr =[]
        response.forEach(item =>{
            const recipeData = item.data()
            tempArr.push(recipeData)
                          })
        loadLocalStorage(tempArr,"AllUi")
    })
}
useEffect(()=>{
   LoadCarousels()
},[])
    const data = pullLocalStorage("AllUi")
  return (
   <div>
     
        {/*  Carousel Section .. */}
            <Carousels data={data}/>
        {/*  Promotions Section.. */}
            <Promotions/>
        {/*  Product Categories Section .. */}
            <CategoryShow/>
        {/*  Featured Products..*/} 
            <Featured/>
  
    </div>
  )
}

export default HomeScreen