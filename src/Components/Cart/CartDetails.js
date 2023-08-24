import React from 'react'
import './CartDetails.css'
import { useSelector } from 'react-redux'

const CartDetails = () => {
    const deliveryCharge = useSelector((state)=>state.cart.deliveryCharge)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
  return (
    <div className='detail-container'>
        <div className='detail-subtotal'>
            <h4>Subtotal :<span> {cartTotal} </span> FCFA</h4>
            
        </div>
        <div className='detail-delivery'>
            <h4>Delivery Fee :<span> {deliveryCharge} </span> FCFA</h4>
            <p>This is an approximative Delivery method.Please Note we will require your valid telephone Number<br/><span >** Pickup Point Delivery Coming Soon **</span></p>
        </div>
        <div className='detail-pickup'>
            {/* <h4>Location :</h4>
            <select>
                <option> Acacias </option>
                <option> Rond Point Express </option>
                <option> Jouvence </option>
                <option defaultValue={'Mendong Point'} defaultChecked> Mendong </option>
                <option> Damas</option>
            </select> */}
        </div>
        <div className='detail-total'>
            <h5>Grand Total :  {cartTotal + deliveryCharge} FCFA</h5>
        </div>
    </div>
  )
}

export default CartDetails