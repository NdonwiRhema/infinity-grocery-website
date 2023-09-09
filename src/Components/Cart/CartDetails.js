import React from 'react'
import './CartDetails.css'
import { useSelector } from 'react-redux'
import { French } from '../utils/FrenchTranslation'

const CartDetails = () => {
    const deliveryCharge = useSelector((state)=>state.cart.deliveryCharge)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
    const language = useSelector((state)=>state.language.data)
    

  return (
    <div className='detail-container'>
        <div className='detail-subtotal'>
            <h4>{language === 'en'?'Subtotal':French.cart.subtotal}<span> : {cartTotal} </span> FCFA</h4>
            
        </div>
        <div className='detail-delivery'>
            <h4>{language === 'en'?'Delivery Fee':French.cart.deliveryFee} :<span> {deliveryCharge} </span> FCFA</h4>
            <p>
                {language === 'en'?'This is an approximative Delivery method.Please Note we will require your valid telephone Number':French.cart.deliveryText}
                <br/><span >{language === 'en'?'** Pickup Point Delivery Coming Soon **': French.cart.pickupDelivery}</span></p>
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