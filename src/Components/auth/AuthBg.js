import React, { useEffect, useState } from 'react'

import './AuthBg.css'
import Carousels from '../Carousels'
import Auth from './Auth'
import { Col, Container,Row } from 'react-bootstrap'
import { pullLocalStorage,loadLocalStorage } from '../utils/LocalStorageOperations'
import { useDispatch } from 'react-redux'
import { pullWhere } from '../utils/FirebaseOperations'
import ResetPassword from './ResetPassword'


const AuthBg = ({register}) => {
  const dispatch = useDispatch()
  const[resetPassword,setResetPassword] = useState(false)
  const uiData = pullLocalStorage("AllUi").length>0?pullLocalStorage("AllUi"):0
  function LoadCarousels () {
    pullWhere("Ui",'status','active','==').then(response=>{
        let tempArr =[]
        response.forEach(item =>{
            const recipeData = item.data()
            tempArr.push(recipeData)
                          })
        loadLocalStorage(tempArr,"AllUi")
    })
}
    useEffect(()=>{
      uiData ===0 &&  LoadCarousels()
    },[])
  return (
 <div className='container-wrapper'>
    <div className='imgHolder'> 
    <img 
      alt='bg-img'
      src='https://media.istockphoto.com/id/1128687123/photo/shopping-bag-full-of-fresh-vegetables-and-fruits.jpg?s=612x612&w=0&k=20&c=jXInOVcduhEnfuUVffbUacldkF5CwAeThD3MDUXCItM='/>    
    </div>
    <div className='auth_opacity'><span></span></div>
    <div className='auth_content'>
             <Container fluid>
                    <Row>
                        <Col xs={12} sm={4}>
                            {resetPassword?(<ResetPassword/>):(<Auth register={register} setResetPassword={setResetPassword}/>)}
                        </Col>
                        <Col  sm={8} >
                           <div className='content-carousel'>
                             <Carousels data={uiData!==0 && uiData}/>
                           </div>
                        </Col>
                    </Row>
                </Container>
    </div>
</div>
  )
}

export default AuthBg