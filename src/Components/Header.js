import React,{useEffect} from 'react'
import BannerHead from './Banner/BannerHead'
import BannerMid from './Banner/BannerMid'
import BannerNav from './Banner/BannerNav'
import { pullLocalStorage } from './utils/LocalStorageOperations'
import { useDispatch } from 'react-redux'
import { categoryThunk, loadStateFromLocal } from '../app/features/categorySlice'
import { productThunk } from '../app/features/productSlice'

const Header = () => {
 const allCategories = pullLocalStorage('AllCategory').length
 const allProducts = pullLocalStorage('AllProducts').length

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
      dispatch(categoryThunk())
    }
   if(allProducts ===0){
    dispatch(productThunk())
   }
  },[dispatch])
  return (
    <div>
      <BannerHead/>
      <BannerMid/>
      <BannerNav activeTab={activeTab}/>
    </div>
  )
}

export default Header
