import React from 'react'
import { useSelector } from 'react-redux'

const InfoComponent = () => {
    const User = useSelector((state)=> state.user.data.user)
    const tempName = User.email.split('@')
    console.log(User)
  return (
    <div id='info'>
        <form>
                <div className='form-group'>
                    <label>Username</label>
                    <input className='form-control' placeholder={User.displayName?User.displayName:tempName[0]}/>
                </div>
                <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' placeholder={User.email}/>
                </div>
                <div className='form-group'>
                    <label>Telephone</label>
                    <input type='tel' className='form-control' placeholder='Enter A valid phone Number'/>
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <input className='form-control' placeholder='Enter Your Address Line'/>
                </div>
                <div className='form-group'>
                    <label>Preferred Pick Point</label>
                    <select className='form-control'>
                        <option>Acacias</option>
                        <option>Mendong</option>
                        <option>Emmana</option>
                        <option>Simbok</option>
                        <option>Biyem-Assi</option>
                        <option>Essos</option>
                    </select>
                    
                </div>               
                             
        </form>
    </div>
  )
}

export default InfoComponent