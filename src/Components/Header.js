import React from 'react'
import BannerHead from './Banner/BannerHead'
import BannerMid from './Banner/BannerMid'
import BannerNav from './Banner/BannerNav'



const Header = () => {
 const location = window.location.pathname
 let activeTab

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
  return (
    <div>
      <BannerHead/>
      <BannerMid/>
      <BannerNav activeTab={activeTab}/>
    </div>
  )
}

export default Header
