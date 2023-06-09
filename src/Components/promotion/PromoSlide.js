import React from 'react'
import { Card} from 'react-bootstrap'
import './PromoSlide.css'
import { useNavigate } from 'react-router-dom'


const PromoSlide= () => {
  const navigate = useNavigate()
  const PromoImg = 'https://media.istockphoto.com/id/1319927536/photo/shopping-basket-full-of-groceries-isolated-on-white-background.jpg?b=1&s=170667a&w=0&k=20&c=SpfWWmsPDBPyma_SsfkaA7xtosFfASHeeHTYAiHZPGM='
  return (
   <div className='slide'>
      <Card style={{ width: '18rem'}}>
        <Card.Img variant="top" src={PromoImg} />
        <Card.Body>
          <Card.Title>BreakFast Grocery Basket</Card.Title>
          <Card.Text>
            Get a full basket of all groceries you will ever need for breakfast today.
          </Card.Text>
          <div className='btn-section'>
            <div className='offer-btn'><button className='btn-bg' onClick={()=>navigate('/promoDescription')}> Check  Offer </button></div>
            <div className='price-offer'>
              <span className='price'>5000 FCFA <span className='offer'>10000 FCFA</span></span>
            </div>
          </div>
        </Card.Body>
      </Card>
   </div>
  )
}

export default PromoSlide