import React, { useState } from 'react'
import './ProfileNav.css'
const ProfileNav = ({setMenu}) => {
    const [active,setActive] = useState('info')
    
function changeMenu(option){
    setActive(option)
    setMenu(option)
}

  return (
    <div className='parent-Nav'>
        <div onClick={()=>changeMenu('info')} className={`nav-Item  ${active==='info'&& 'activeItem'}`}>Account Info</div>
        <div onClick={()=>changeMenu('security')} className={`nav-Item  ${active==='security'&& 'activeItem'}`}>Account Security</div>
        <div onClick={()=>changeMenu('promos')} className={`nav-Item  ${active==='promos'&& 'activeItem'}`}> My Promos</div>

    </div>
  )
}

export default ProfileNav