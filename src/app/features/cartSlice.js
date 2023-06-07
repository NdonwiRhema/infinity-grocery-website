import { createSlice } from "@reduxjs/toolkit";


const LocallyStoredData = ()=>{
    const datum = localStorage.getItem('cart')
   if(datum){
     // const dataArr = []
       const locData = localStorage.getItem('cart')
       console.log(JSON.parse(locData))
       // dataArr.push(locData)
        return JSON.parse(locData)
    }
   else{
    return []
   }
}

const  storeData =(cartitems) =>{
    localStorage.setItem('cart',cartitems)
}
const CartTotal= () =>{
        const currentCart = LocallyStoredData()
        let cartTotalAmount = 0
        if(currentCart.length !== 0){
            currentCart.forEach(element=>{
                cartTotalAmount += element.subtotal
            })
        }
    
    return cartTotalAmount
}

const Cartlength =  LocallyStoredData()

const cartSlice= createSlice({
    name:'cart',
    initialState:{
        data:LocallyStoredData(),
        totalItems:Cartlength.length,
        cartTotal:CartTotal(),
        deliveryCharge:0
    },
    reducers:{
        addToCart:(state, action)=>{
            const TempItem = state.data.find(item =>item.id === action.payload.id)
            state.data =LocallyStoredData()
            state.totalItems ++
            if(TempItem){
                // find sth to do here...
                   console.log("Already in Cart")
            }
            else{
                state.data.push(action.payload)
               
                const lenArr = state.data
                const lenObj = JSON.stringify(lenArr)//[{...},{...}]
                storeData(lenObj)
               }
        },
        addMany:(state,action)=>{
                const Contents = action.payload
                Contents.forEach(element =>{
                    state.data.push(element)
                })
                const lenArr = state.data
                const lenObj = JSON.stringify(lenArr)//[{...},{...}]
                storeData(lenObj)
        },   
        EmptyCart:(state)=>{
            state.data=[]
            state.totalItems = 0
            state.cartTotal=0
            storeData(state.data)
        },
       removeItem:(state,action)=>{
            const newCart = state.data.filter((c_item)=>c_item.id !== action.payload.id)
            state.data = newCart
            state.totalItems--
            const storeCart = JSON.stringify(newCart)
            storeData(storeCart)
            // new cart total 
            let newCartTotal = 0
            newCart.forEach(elm=>{
                newCartTotal += elm.subtotal
            })
            state.cartTotal = newCartTotal
    },
    increment:(state,action)=>{
        let tempCart=[]
        state.data.forEach(element =>{
            if(element.id === action.payload.id){
                let newQty =  element.quantity+1
                let newTotal = newQty*element.price
            const tempElm = {...element,quantity:newQty,subtotal:newTotal}
                tempCart.push(tempElm)
            }
            else{
                tempCart.push(element)
            }
        })
        state.data = tempCart
        const storeCart = JSON.stringify(tempCart)
        storeData(storeCart)
         // new cart total 
         let newCartTotal = 0
         tempCart.forEach(elm=>{
             newCartTotal += elm.subtotal
         })
         state.cartTotal = newCartTotal
    },

  decrement:(state,action)=>{
        let tempCart=[]
        state.data.forEach(element =>{
         if(element.id === action.payload.id){
            
            let newQty = element.quantity>1 ? element.quantity-1:1
            let newTotal = newQty*element.price
           const tempElm = {...element,quantity:newQty,subtotal:newTotal}
            tempCart.push(tempElm)
        }
        else{
            tempCart.push(element)
        }
       })
        state.data = tempCart
        const storeCart = JSON.stringify(tempCart)
        storeData(storeCart)
        // new cart total 
        let newCartTotal = 0
        tempCart.forEach(elm=>{
            newCartTotal += elm.subtotal
        })
        state.cartTotal = newCartTotal
     }
    }
})

export const {addToCart,EmptyCart,increment,decrement,removeItem} = cartSlice.actions
export default  cartSlice.reducer