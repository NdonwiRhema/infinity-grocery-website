import React from 'react'
import InfoComponent from './InfoComponent'
import SecurityComponent from './SecurityComponent'
import PromosComponent from './PromosComponent'
import './ProfileBody.css'


const ProfileBody = ({menu}) => {

  
  return (
    <div>
        {menu === 'info'&&(<InfoComponent/>)}
        {menu === 'security'&&(<SecurityComponent/>)}
        {menu === 'promos'&&(<PromosComponent/>)}
        

    </div>
  )
}

export default ProfileBody