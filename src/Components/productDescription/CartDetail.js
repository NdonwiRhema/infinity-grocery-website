import React,{useState} from 'react'
import { FaAngleRight, FaCoins, FaMinus, FaPlus, FaStore, FaWeightHanging} from 'react-icons/fa'

import './CartDetail.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../app/features/cartSlice'

const CartDetail = ({data}) => {
    const[Qty,setQty] = useState(1)
    const dispatch = useDispatch()
    const currentCart = [localStorage.getItem('cart')]

    function AddtoCart(){
      const TempProduct = {
        id:data.id,
        description:data.description,
        title:data.title,
        images:data.images,
        category:data.category,
        quantity:Qty+1,
        price:data.price,
        subtotal:data.price}
      if(currentCart && currentCart.length === 0 && currentCart[0] !== null){
         localStorage.setItem('cart',JSON.stringify(TempProduct))
           }
           dispatch(addToCart(TempProduct))
           
    }
  return (
    <div className='main-wrapper'>
      <div className='product-detail'>
        <span>Category <FaAngleRight/> {data.category.name}</span>
            <h4 >{data.title}</h4>
            <h6><span>Short description : </span>Lorem Ipsum dolor sit amet consectatur it adepiscing</h6>
      </div>
      <div className='price-detail'>
        <h5>{data.price} FCFA</h5>
        <div className='price-info'>
            <div>
                <span><FaCoins fontSize={12} color='#f39317'/> 12 Buys</span>
            </div>
            <div>
                <span><FaStore fontSize={12} color='#f39317'/> In Stock</span>
            </div>
            <div>
                <span><FaWeightHanging fontSize={12} color='#f39317'/> Kilogram(s)/Bag(s)/Piece(s)</span>
            </div>
        </div>
        <div className='quantity'>
            <div className='minus' onClick={()=>{Qty>1&&setQty(Qty-1)}}><FaMinus/></div>
            <div className='field'>{Qty}</div>
            <div className='plus' onClick={()=>setQty(Qty+1)}><FaPlus/></div>
        </div>
        <div>

        </div>
      </div>
      <button className='btn-bg' onClick={()=>AddtoCart()}> Add To Cart</button>
    </div>
  )
}

export default CartDetail
