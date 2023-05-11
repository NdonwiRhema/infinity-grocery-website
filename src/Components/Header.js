import React from 'react'
import BannerHead from './Banner/BannerHead'
import BannerMid from './Banner/BannerMid'
import BannerNav from './Banner/BannerNav'

const Header = () => {
  return (
    <div>
      <BannerHead/>
      <BannerMid/>
      <BannerNav/>
    </div>
  )
}

export default Header
