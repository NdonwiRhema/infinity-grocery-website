import React,{useState} from 'react'
import { FaAngleRight, FaCoins, FaMinus, FaPlus, FaStore, FaWeightHanging} from 'react-icons/fa'

import './CartDetail.css'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../app/features/cartSlice'
import { Badge } from 'react-bootstrap'
import { selectUnits } from '../utils/GeneralOperations'

const CartDetail = ({data}) => {
    const[Qty,setQty] = useState(1)
    const dispatch = useDispatch()
    const categories = useSelector((state)=>state.category.data)
    const Category = categories.filter((item)=>item.id===data.category)
    const units = selectUnits(data.stock[0].units)
    const currentCart = [localStorage.getItem('cart')]
    console.log(Category)
    console.log(data)
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
        <span>Category <FaAngleRight/> {Category[0].name}</span>
            <h4 >{data.title}</h4>
            <h6><span>Short description : </span>{data.shortDesc}</h6>
      </div>
      <div className='price-detail'>
        <h5>{data.price} FCFA</h5>
        <div className='price-info'>
            <div>
                <span><FaCoins fontSize={12} color='#f39317'/> 12 Buys</span>
            </div>
            <div>
                <span><FaStore fontSize={12} color='#f39317'/> <Badge bg={data.stock[0].outStock?'danger':'success'}>{data.stock[0].outStock?'Out of Stock':'In Stock'}</Badge></span>
            </div>
            <div>
                <span><FaWeightHanging fontSize={12} color='#f39317'/> {units}</span>
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
