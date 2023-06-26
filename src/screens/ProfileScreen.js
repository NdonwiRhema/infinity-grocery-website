import React, { useState } from 'react'
import ProfileHeader from '../Components/ProfileHeader'
import ProfileNav from '../Components/profiles/ProfileNav'
import ProfileBody from '../Components/profiles/ProfileBody'

const ProfileScreen = () => {
  const [menu,setMenu] = useState('info')
  return (
    <div>
      <ProfileHeader/>
      <ProfileNav setMenu={setMenu}/>
      <ProfileBody menu={menu}/>
    </div>
  )
}

export default ProfileScreen