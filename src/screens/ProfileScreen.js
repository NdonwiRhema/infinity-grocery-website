import React, { useEffect, useState } from 'react'
import ProfileHeader from '../Components/ProfileHeader'
import ProfileNav from '../Components/profiles/ProfileNav'
import ProfileBody from '../Components/profiles/ProfileBody'
import Authentic,{db} from '../firebase'
import { doc,getDoc } from 'firebase/firestore'

const ProfileScreen = () => {
  const [menu,setMenu] = useState('info')
  const [dbData,setDbData] = useState()
  const currentUser = Authentic.currentUser
useEffect(()=>{
  const docRef = doc(db,"Users",currentUser.uid)
  getDoc(docRef).then((docSnapshot)=>{
      if(docSnapshot.exists()){
          const db_user = docSnapshot.data()
          setDbData(db_user)
      }
  })
},[])
  return (
    <div>
      <ProfileHeader data ={dbData} user={currentUser}/>
      <ProfileNav setMenu={setMenu}/>
      <ProfileBody menu={menu}/>
    </div>
  )
}

export default ProfileScreen