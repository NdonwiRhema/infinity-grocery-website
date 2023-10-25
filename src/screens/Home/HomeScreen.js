import React,{useEffect} from 'react'


import Carousels from '../../Components/Carousels'
import Promotions from '../../Components/Promotions'
import CategoryShow from '../../Components/CategoryShow'
import Featured from '../../Components/Featured'
import { useDispatch, useSelector } from 'react-redux'
import { uiThunk } from '../../app/features/uiSlice'

const HomeScreen = () => {
const dispatch  = useDispatch()
const ui = useSelector(state=>state.ui.data)
useEffect(()=>{
    ui.length=== 0&& dispatch(uiThunk())
},[])
    
  return (
   <div>
     
        {/*  Carousel Section .. */}
            <Carousels data={ui}/>
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