import React from 'react'
import ProfileHead from './profiles/ProfileHead'

const ProfileHeader = ({data,user ,setRefresh}) => {
  return (
    <div>
        <ProfileHead data={data} user={user} setRefresh={setRefresh}/>
    </div>
  )
}

export default ProfileHeader