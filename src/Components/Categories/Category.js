import React, { useEffect } from 'react'
import'./Category.css'
import Item from './Item'
import { pullLocalStorage } from '../utils/LocalStorageOperations'
import { useDispatch, useSelector } from 'react-redux'
import { categoryThunk } from '../../app/features/categorySlice'

const Categories = () => {
  const bgImg='https://img.freepik.com/free-vector/realistic-supermarket-social-media-cover-template_23-2149364804.jpg'
  const allCategory = pullLocalStorage("AllCategory")
  const Categories= useSelector((state)=>state.category.data)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(allCategory.length === 0){
      dispatch(categoryThunk())
    }
  },[])
 
  return (
    <div className='holder'>
        <div className='bg-img'> 
          <img className='img' src={bgImg} alt='none'/>      
        </div>
        <div className='opacity'><span>...</span></div>
        <div className='content'>
          <div className='heading'><h4> Product Categories</h4></div>
          <div className='ca_items'>
              {
                Categories.length>0 && Categories.map((category,index)=>(
                  <Item key={index}  title={category.name}/>
                ))
              }
             
          </div>
        </div>
    </div>
  )
}

export default Categories