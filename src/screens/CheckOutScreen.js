import React, { useState,useEffect } from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import CheckoutDetails from '../Components/checkout/CheckoutDetails'
import ContactPerson from '../Components/checkout/ContactPerson'
import Payment from '../Components/checkout/Payment'

import { useSelector,useDispatch } from 'react-redux'
import { locationThunk } from '../app/features/locationSlice'
import { pull } from '../Components/utils/FirebaseOperations'


const CheckOutScreen = () => {
  const dispatch = useDispatch()
  const USER = useSelector((state)=>state.user.data)
  const [check,setCheck] = useState({
    complete:false,
    contactData:''
  })
  const [authUser,setAuthUser] = useState({})

  useEffect(()=>{
    if(USER){
      pull("Users",USER.user.uid).then((user)=>{
        setAuthUser(user)
       })
    }
      dispatch(locationThunk())
  },[dispatch])
  console.log(check)
  console.log(authUser)

  return (
    <div>
        <Container fluid>
            <Row>
                <Col xs={12} sm={9}>
                  {!check.complete?(<ContactPerson authUser={authUser} setCheck = {setCheck}/>)
                  :(
                    <Payment check={check}/>
                  )}
                   
                </Col>
                <Col xs={12} sm={3}>
                    <CheckoutDetails  authUser={authUser}/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CheckOutScreen