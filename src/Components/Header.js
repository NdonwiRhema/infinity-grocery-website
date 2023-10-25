import React,{useEffect} from 'react'
import BannerHead from './Banner/BannerHead'
import BannerMid from './Banner/BannerMid'
import BannerNav from './Banner/BannerNav'
import { pullLocalStorage } from './utils/LocalStorageOperations'
import { useDispatch, useSelector } from 'react-redux'
import { categoryThunk } from '../app/features/categorySlice'
import { productThunk } from '../app/features/productSlice'

const Header = () => {
 const allCategories = pullLocalStorage('AllCategory').length
 const allProducts = pullLocalStorage('AllProducts').length
 const langSelected  =   useSelector(state=> state.language.data)
 const language = langSelected.length===0? pullLocalStorage('language'):langSelected

 const location = window.location.pathname
 let activeTab
  const dispatch = useDispatch()
  switch(location){
    case'/':
      activeTab = 'home'
    break;

    case'/shop':
      activeTab = 'shop'
    break;

    case'/recipe':
      activeTab = 'recipes'
    break;
   
    case'/breakfast':
      activeTab = 'breakfast'
    break;
   
    case'/fruit':
      activeTab = 'fruits'
    break;
   
    case'/protein':
      activeTab = 'proteins'
    break;
    default:
       activeTab = 'home'

       break;

  }
  useEffect(()=>{
    if(allCategories === 0){
      dispatch(categoryThunk(language))
    }
   if(allProducts ===0){
    dispatch(productThunk(language))
   }
  },[])
  return (
    <div>
      <BannerHead/>
      <BannerMid/>
      <BannerNav activeTab={activeTab}/>
    </div>
  )
}

export default Header
