import React from 'react'
import { FaMinus, FaPlus, FaWindowClose } from 'react-icons/fa'


import './CartItem.css'
const CartItem = () => {
    const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'
  const AddingUnit = ()=>{
    return(
        <div className='adder-container'>
          <div className='adder'>
            <div className='minus'>
                <FaMinus fontSize={11}/>
            </div>
            <div className='value'>
                <h5> 1 </h5>
            </div>
            <div className='plus'>
                <FaPlus fontSize={11}/>
            </div>
         </div>
         <h3><span className='subtotal'>Subtotal :</span>300 <span>FCFA</span></h3>
        </div>
    )
}
  return (
    <div className='item-holder'>
        <div className='item-close'>
            <FaWindowClose fontSize={12}/>
        </div>
        <div className='item-body'>
            <div className='item-img'>
                <img src={PromoImg} alt='product'/>
            </div>
            <div className='item-text'>
                <h4>Product Name</h4>
                <div className='units'>
                    <h6>Quantity ( kgs)</h6>
                    <AddingUnit/>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem