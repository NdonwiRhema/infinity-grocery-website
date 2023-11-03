import React from 'react'
import AuthBg from '../Components/auth/AuthBg'


const AuthScreen = () => {
 const params = window.location.search? new URLSearchParams(window.location.search):''
 const register = (params&&params.get('register') === '1')?true:false
  return (
    <div>
        <AuthBg register={register}/>
    </div>
  )
}

export default AuthScreen