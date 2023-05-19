import React from 'react'
import './CartDetails.css'

const CartDetails = () => {
  return (
    <div className='detail-container'>
        <div className='detail-subtotal'>
            <h4>Subtotal :<span> 5000 </span> FCFA</h4>
            
        </div>
        <div className='detail-delivery'>
            <h4>Delivery Fee :<span> 0 </span> FCFA</h4>
            <p>This is not applicable as home delivery is not yet available.<br/><span >** Home Delivery Coming Soon **</span></p>
        </div>
        <div className='detail-pickup'>
            <h4>Pick Up Points :</h4>
            <select>
                <option> Acacias Point</option>
                <option selected> Mendong Point</option>
                <option> Emana Point</option>
            </select>
        </div>
        <div className='detail-total'>
            <h5>Grand Total :  5000 FCFA</h5>
        </div>
    </div>
  )
}

export default CartDetails