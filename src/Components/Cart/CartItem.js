import React from 'react'
import { FaMinus, FaPlus, FaWindowClose } from 'react-icons/fa'


import './CartItem.css'
import {useDispatch} from 'react-redux'
import { decrement, increment,removeItem } from '../../app/features/cartSlice'
const CartItem = ({data}) => {
    const dispatch = useDispatch()
 
  //const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'
  const CartItemImg = data.images
  const AddingUnit = ()=>{
    return(
        <div className='adder-container'>
          <div className='adder'>
            <div className='minus' onClick={()=>dispatch(decrement(data))}>
                <FaMinus fontSize={11}/>
            </div>
            <div className='value'>
                <h5> {data.quantity} </h5>
            </div>
            <div className='plus' onClick={()=>dispatch(increment(data))}>
                <FaPlus fontSize={11}/>
            </div>
         </div>
         <h3><span className='subtotal'>Subtotal :</span>{data.subtotal} <span>FCFA</span></h3>
        </div>
    )
}
  return (
    <div className='item-holder'>
        <div className='item-close' onClick={()=>dispatch(removeItem(data))}>
            <FaWindowClose fontSize={12}/>
        </div>
        <div className='item-body'>
            <div className='item-img'>
                <img src={CartItemImg} alt='product'/>
            </div>
            <div className='item-text'>
                <h4>{data.title}</h4>
                <div className='units'>
                    <h6>Quantity ({data.Units})</h6>
                    <AddingUnit/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem