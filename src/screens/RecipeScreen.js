import React ,{useEffect}from 'react'
import SlideShow from '../Components/VideoSlide/SlideShow'
import RecipeBody from '../Components/RecipeBody'
import { useDispatch } from 'react-redux'
import {productThunk} from '../app/features/productSlice'

const RecipeScreen = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(productThunk())
  },[dispatch])
  return (
    <div>
        {/* // Header */}
    {/* //SlideShow */}
    <SlideShow/>
    
    {/* //Body */}
    <RecipeBody/>

    {/* //Footer */}
    </div>
  )
}

export default RecipeScreen