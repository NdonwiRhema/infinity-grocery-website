import React, { useEffect } from 'react'
import'./Category.css'
import Item from './Item'
import { useDispatch, useSelector } from 'react-redux'
import { categoryThunk } from '../../app/features/categorySlice'
import { French } from '../utils/FrenchTranslation'

const Categories = () => {
  const bgImg='https://img.freepik.com/free-vector/realistic-supermarket-social-media-cover-template_23-2149364804.jpg'

  const Categories= useSelector((state)=>state.category.data)
  const language = useSelector((state)=>state.language.data)
  
  const dispatch = useDispatch()
   useEffect(()=>{
        dispatch(categoryThunk(language))
    },[dispatch,language])
  return (
    <div className='holder'>
        <div className='bg-img'> 
          <img className='img' src={bgImg} alt='none'/>      
        </div>
        <div className='opacity'><span>...</span></div>
        <div className='content'>
          <div className='heading'><h4>{language==='en'?'Product Categories':French.home[0].categories}</h4></div>
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