import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Buffer } from 'buffer'
import { useDispatch, useSelector } from 'react-redux'
import{FaWindowClose} from 'react-icons/fa'
import Heading from '../Heading'
import './Payment.css'
import { createLastModified, randomStrings } from '../utils/GeneralOperations'
import { pull, push, updateFirebase } from '../utils/FirebaseOperations'
import { EmptyCart } from '../../app/features/cartSlice'
import { French } from '../utils/FrenchTranslation'


const Payment = ({check}) => {
    const persona = check.contactData
    const Navigate = useNavigate()
    const dispatch = useDispatch()
    const[agreed,setAgreed] = useState(false)
    const[status,setStatus] = useState({
        initiated : true,
        success:false,
        failed:false,
        warning:false,
        order:''
    })
    const[error,setError] = useState('')
    const location = useLocation()
    const cartInfo  = JSON.parse(location.state)
    const deliveryCharge = useSelector((state)=>state.cart.deliveryCharge)
    const cartTotal = useSelector((state)=>state.cart.cartTotal)
    const language = useSelector((state)=>state.language.data)

  function confirmOrder(){
    
  const docId=  randomStrings('order_')
  const Order ={
        id:docId,
        owner:persona.owner,
        status:'awaiting',
        ownerContact:persona.contact,
        ownerAddress:persona.ownerAddress,
        reject:false,
        total: parseInt(deliveryCharge)+parseInt(cartTotal),
        type:'payment-on-delivery',
        currency:'FCFA',
        deliveryFee:deliveryCharge,
        lastModified:createLastModified(),
        created_at:createLastModified(),
        content:cartInfo

    }
   
 const UpdateProductQuantities =()=>{
    cartInfo?.forEach(element => {
        const p_id = element.id
        const ordered_qty = element.quantity
        pull("Products",p_id).then((res)=>{
         
        const stck = res.stock[0]
           const actual = res.stock[0].actualStock
           let newQty = actual>0?parseInt(actual)-parseInt(ordered_qty):parseInt(res.stock[0].inStock)-parseInt(ordered_qty)
           const newStock =[{outStock:newQty<5?true:false,
            inStock:stck.inStock,
            actualStock:newQty,
            units:stck.units}]
            const updateData = {
                stock:newStock,
                lastModified:createLastModified(),
                } 
          updateFirebase("Products",p_id,updateData).then(res=>{
              
          })
        })
    });
 }   
 

    // Loading order to Firestore..
push("Orders",Order,docId).then((res)=>{
        setAgreed(agreed&&false)
        // send the sms with ClickSend
        const to = '237'+persona.contact
        const msg = persona.owner+'. Thanks for placing an order on Infinity Grocery.Your order ID is '+docId

const options = {
    method: 'POST',
    url:'https://rest.clicksend.com/v3/sms/send',
    headers:{
        'content-type':'application/json',
        'Authorization':`Basic ${Buffer.from("rhemandonwi59@gmail.com:E227F0D2-41FF-1C50-B0F1-9938CEF9E419").toString('base64')}`,
    },
    data:{
        "messages":[
            {
                "to":to,
                "source":"Infinity Grocery",
                "body":msg
            }
        ]
    },
}
try {
    axios.request(options).then((response)=>{
       console.log(response.data)
      if(response.data.http_code === 200 ){
        setStatus({initiated:false,success:true,failed:false,warning:false,order:docId})
        
    } 
      else{
        setStatus({initiated:false,success:false,failed:false,warning:true,order:docId})
        setError(`${docId}`)
    }
    }).catch(e=>alert(e.message))
    
} catch (error) {
    setStatus({initiated:false,success:false,failed:true,warning:false,order:docId})
    setError(error.message)
}
UpdateProductQuantities()
dispatch(EmptyCart())
    }).catch((e)=>{
       setStatus({initiated:false,success:false,failed:true,warning:false})
       setError(e.message)
    })
}
  function Agree(e){
    const curent = e.target.value
    setAgreed(curent=== 'false'?true:false)
   }
  return (
    <div className='payment-container'>
      <div className='order-summary'>
        <Heading text={'Check Out Summary'}/>
        <div className='Summary'>
            <div className='form-group'>
                <label>{language==='en'?'Person':French.checkOut.name} </label>
                <h6>{persona.owner} </h6>
            </div>
            <div className='form-group'>
                <label>{language==='en'?'Phone Number':French.checkOut.phone} </label>
                <h6>{persona.contact} </h6>
            </div>
            <div className='form-group'>
                <label>{language==='en'?'Address':French.checkOut.address} </label>
                <h6>{persona.ownerAddress} </h6>
            </div>
            <div className='form-group'>
                <label>{language==='en'?'Town of Residence':French.checkOut.town}</label>
                <h6>{persona.ownerTown}</h6>
            </div>
        </div>
        <div className='order-section'>
            <h5>{language==='en'?'Order Content':French.checkOut.content}</h5>
            {
                cartInfo&&cartInfo.map((info,index)=>(
                    <div className='order-list' key={index}>
                        <h6>{info.title}</h6>
                        <h6>{info.quantity} {info.Units}</h6>
                        <h6>{info.subtotal}</h6>
                    </div>
                ))
            }
           <div className='order-list'>
               <h6>Total</h6>
               <h6>{cartTotal}</h6>
           </div> 
           <div className='order-list'>
               <h6>{language==='en'?'Delivery Charge':French.checkOut.deliveryFee} : </h6>
               <h6>{deliveryCharge}</h6>
           </div> 
           <div className='order-list'>
                <h6>Grand Total</h6>
                <h5>{parseInt(cartTotal)+parseInt(deliveryCharge)}</h5>
           </div> 
           
        </div>
        <div className="disclaimer">
            <input
            id='agreement'
             type='checkbox'
             value={agreed}
            onClick={(e)=>Agree(e)}
              />
            <p>
                {language === 'en'?`Please Note that checking this box means
                 you agree to pay the full charge mentioned.`:French.checkOut.disclaimer1}
                 <br/>
                 <span>
                {language ==='en'?`THE DELIVERY CHARGE WILL BE PAID REGARDLESS 
                 OF THE PACKAGE BEING REJECTED UPON ARRIVAL.`:French.checkOut.disclaimer2}
                 </span>
                 <br/>
                {language === 'en'?` Delivery charge is non-refundable and non-negotiable`:French.checkOut.disclaimer3}
            </p>
        </div>
        <div className='form-group'>
            <button className={`${agreed?'btn-bg':'inactivate'}`} onClick={()=>agreed&&confirmOrder()}>Confirm Order</button>
        </div>
      </div>
      <div className='order-payment'>
      <Heading text={'Payment Method'}/>
            {status.initiated && (
                <>
               <div className='pay-option-1'>
                <div className='radio'>
                    <div className='form-group'>
                        <input type='checkbox' value={'online-payment'} disabled/>
                        
                    </div>
                </div>
                <div className='radio-info'>
                    <h5> Mobile Money</h5>
                    <p>{language === 'en'?'(Coming Soon)This feature is not Available at the moment':French.checkOut.momo}</p>
                    <hr/>
                    <div className='momo-images'>
                        <img src='https://i0.wp.com/www.leconomie.info/wp-content/uploads/2023/01/Screenshot-from-2023-01-21-17-31-04-780x416-1.png?fit=780%2C416&ssl=1'
                         alt='orange Money'
                         width={80} height={'auto'}/>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeKg_AlznCzzrx5AHYdgmHHKcY9DCe3_xcuA&usqp=CAU'
                         alt='momo'
                         width={80} height={'auto'}/>
                    </div>
               </div>
            </div>
            <div className='pay-option'>
                <div className='radio'>
                    <div className='form-group'>
                        <input type='radio'/>
                    </div>
                </div>
                <div className='radio-info'>
                    <h5>{language==='en'?'Payment-On-Delivery':French.checkOut.pay}</h5>
                   
                    <hr/>
                    <div className='momo-images'>
                    <p>{persona.ownerAddress}</p>
                    </div>
               </div>
            </div>
                </>
            )}
            {status.failed && (
                <>
            <div className='failed-option'>
                <div className='radio'>
                    <div className='form-group'>
                        <FaWindowClose onClick={()=>Navigate('/shop')}/>
                    </div>
                </div>
                <div className='radio-info'>
                    <h5>{language === 'en'?'Transaction failed':French.checkOut.transactionFailed}</h5>
                   
                    <hr/>
                    <div className='momo-images'>
                    <p>{language === 'en'?'There was an error :':'Une Erreur: '} <br/>{error} </p>
                    </div>
               </div>
            </div>
                </>
            ) }
           {status.success &&(
            <>
             <div className='success-option'>
                <div className='radio'>
                    <div className='form-group'>
                        <FaWindowClose onClick={()=>Navigate('/shop')}/>
                    </div>
                </div>
                <div className='radio-info'>
                    <h5>{language === 'en'?'Transaction Completed Successfully':French.checkOut.transactionMsgSuccess}</h5>
                   
                    <hr/>
                    <div className='momo-images'>
                    <p>
                        {language==='en'?'To confirm this, an sms containing your order ID has been sent to':French.checkOut.transactionMsgConfirmation} {persona.contact}. 
                        {language==='en'?'In case you cannot receive the sms,your order ID is':French.checkOut.transactionMsgConfirmation1} {status.order} 
                    </p>

                    </div>
               </div>
            </div>
            </>
           )}
           {status.warning &&(
            <>
             <div className='warning-option'>
                <div className='radio'>
                    <div className='form-group'>
                        <FaWindowClose onClick={()=>Navigate('/shop')}/>
                    </div>
                </div>
                <div className='radio-info'>
                    <h5> {language === 'en'?'Order Created':French.checkOut.orderCreated} </h5>
                   
                    <hr/>
                    <div className='momo-images'>
                    <p>{language=== 'en'?'Your Order has been created successfully but we were unfortunately not able to send a message to ':French.checkOut.orderCreatedMsg} {persona.contact}<br/>
                        <span>{language === 'en'?'Your Order Id :':French.checkOut.orderId}</span> {error}
                    </p>
                    </div>
               </div>
            </div>
            </>
           )}
           
      </div>
    </div>
  )
}

export default Payment
