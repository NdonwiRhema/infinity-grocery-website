import React, { useState } from 'react'
import { FaMinus, FaPlus, FaWindowClose } from 'react-icons/fa'


import './CartItem.css'

const CartItem = ({data}) => {
    const  Cart= []
     const prodQty = data?data.prodQty:1;
     const uPrice = data?data.uPrice:300;
        console.log(data)
     const[Qty,setQty] = useState(prodQty)

     function remove(){
        const rmvcartsearch= obj=>obj===data
        const rmvcount = Cart.findIndex(rmvcartsearch);
       Cart.length > 0 &&Cart.splice(rmvcount,1)
        console.log(Cart)
        
     }
    function Minus(){
       Qty>1 ? setQty(Qty-1):setQty(1)
        const minussearch = obj =>obj ===data
        const cartId = Cart.findIndex(minussearch)
        // waiting to set up the right product object to be modified appropriately
        Cart[cartId].prodQty = Qty
        Cart[cartId].subtotal = Qty*uPrice
        console.log(Qty)

    }
    function Plus(){
        setQty(Qty+1)
       console.log(Qty)
        const plussearch = obj =>obj ===data
        const cartId = Cart.findIndex(plussearch)
         // waiting to set up the right product object to be modified appropriately
        Cart[cartId].prodQty = Qty
        Cart[cartId].subtotal = Qty*uPrice

    }
  const PromoImg = 'https://media.cnn.com/api/v1/images/stellar/prod/120604032828-fresh-ripe-bananas.jpg?q=w_3590,h_2774,x_0,y_0,c_fill'
  const AddingUnit = ()=>{
    return(
        <div className='adder-container'>
          <div className='adder'>
            <div className='minus' onClick={()=>Minus()}>
                <FaMinus fontSize={11}/>
            </div>
            <div className='value'>
                <h5> {data.prodQty} </h5>
            </div>
            <div className='plus' onClick={()=>Plus()}>
                <FaPlus fontSize={11}/>
            </div>
         </div>
         <h3><span className='subtotal'>Subtotal :</span>{data.subtotal} <span>FCFA</span></h3>
        </div>
    )
}
  return (
    <div className='item-holder'>
        <div className='item-close' onClick={()=>remove()}>
            <FaWindowClose fontSize={12}/>
        </div>
        <div className='item-body'>
            <div className='item-img'>
                <img src={PromoImg} alt='product'/>
            </div>
            <div className='item-text'>
                <h4>{data.product}</h4>
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