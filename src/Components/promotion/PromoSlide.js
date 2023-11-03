import React from 'react'
import { Card} from 'react-bootstrap'
import './PromoSlide.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUnits } from '../utils/GeneralOperations'
import { addToCart } from '../../app/features/cartSlice'


const PromoSlide= ({type,option}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productData = useSelector(state=>state.product.data)
  const PromoImg = 'https://media.istockphoto.com/id/1319927536/photo/shopping-basket-full-of-groceries-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=SpfWWmsPDBPyma_SsfkaA7xtosFfASHeeHTYAiHZPGM='
  const currentCart = [localStorage.getItem('cart')]
  const fullProductData = productData.filter((item)=>item.id === option.id)
  
  function AddtoCart(item){
    const TempProduct = {
      id:item.id,
      description:item.desc,
      title:item.name,
      images:item.picture[0].img,
      category:item.category,
      quantity:1,
      price:item.price,
      discount:item.pricePromotion>0?item.price-item.pricePromotion:0,
      subtotal:item.price,
      Units:selectUnits(item.stock[0].units),
      size:'M'
    }
    if(currentCart.length === 0){
       localStorage.setItem('cart',JSON.stringify(TempProduct))
         }
         dispatch(addToCart(TempProduct))
        window.scrollTo(0,0)
  }

  return (
   <div className='slide'>
      <Card style={{ width: '18rem'}}>
        <Card.Img
           variant="top"
           src={option.img==='default'?PromoImg:option.img} 
           onClick={()=>type==='relatedProducts'? navigate('/product',{state:JSON.stringify(fullProductData.pop()),replace:false}):''}/>
        <Card.Body>
          <Card.Title>{option.title}</Card.Title>
          <Card.Text>
           {option.text}
          </Card.Text>
          <div className='btn-section'>
            <div className='offer-btn'><button className='btn-bg' onClick={()=>type==='promo'?navigate('/promoDescription'):AddtoCart(fullProductData.pop())}>{type==='promo'?'Check  Offer':'Add to Cart'} </button></div>
            <div className='price-offer'>
              <span className='price'>{option.price} <span className='offer'>{option.discountedFrom===0?'':option.discountedFrom}</span></span>
            </div>
          </div>
        </Card.Body>
      </Card>
   </div>
  )
}

export default PromoSlide