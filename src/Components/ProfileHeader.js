import React from 'react'
import ProfileHead from './profiles/ProfileHead'

const ProfileHeader = ({data,user}) => {
  return (
    <div>
        <ProfileHead data={data} user={user}/>
    </div>
  )
}

export default ProfileHeader