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
            <p>This is not applicable as home delivery is not yet available.<br/><span >** Home Delivery Coming Soon **</span></p>
        </div>
        <div className='detail-pickup'>
            <h4>Pick Up Points :</h4>
            <select>
                <option> Acacias Point</option>
                <option defaultValue={'Mendong Point'} defaultChecked> Mendong Point</option>
                <option> Emana Point</option>
            </select>
        </div>
        <div className='detail-total'>
            <h5>Grand Total :  {cartTotal + deliveryCharge} FCFA</h5>
        </div>
    </div>
  )
}

export default CartDetails