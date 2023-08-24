import React from 'react'
import './CheckoutDetail.css'
import Heading from '../Heading'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
const CheckoutDetails = () => {
    const location = useLocation()
    const cartInfo  = JSON.parse(location.state)
    const deliveryCharge = useSelector((state)=>state.cart.deliveryCharge)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
  
    return (
    <div className='checkout-container'>
        <Heading text={'Your Order'}/>
        <div className='checkout-body'>
           <div className='checkout-summary-title'>SUMMARY </div>
           <div className='checkout-summary-body'>
                <div className='checkout-summary-subtotal'>
                    <h5>Subtotal</h5>
                    <h6>{cartTotal}</h6>
                </div>
                <div className='checkout-summary-subtotal'>
                    <h5>Delivery Fee</h5>
                    <h6>{deliveryCharge}</h6>
                </div>
                <div className='checkout-summary-subtotal'>
                    <h3>Grand Total</h3>
                    <h4>{cartTotal+deliveryCharge}</h4>
                </div>
          </div>
        </div>
        <Heading text={'Content'}/>
        <div className='content-container'>
           {cartInfo && cartInfo.map((inf,index)=>(
           <div className='content-flex'>
           <div>
               <img src={inf.images} alt='img' width={50} height={50}/>
           </div>
           <div>
               <h6>{inf.title}</h6>
               <p>Quantity :{inf.quantity} {inf.Units} </p>
               <p>Subtotal : {inf.subtotal}</p>
           </div>
       </div>  
        ))}     
       </div>
        
    </div>
  )
}

export default CheckoutDetails