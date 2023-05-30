import { createSlice } from "@reduxjs/toolkit";


const LocallyStoredData = ()=>{
    const datum = JSON.parse(localStorage.getItem('cart'))
    console.log(datum)
    return datum
    
}

const  storeData =(cartitems) =>{
    localStorage.setItem('cart',cartitems)
}
const cartSlice= createSlice({
    name:'cart',
    initialState:{
        data:[],
        totalItems:0,
        cartTotal:0,
        deliveryCharge:0
    },
    reducers:{
        addToCart(state, action){
  console.log(state)            
            const TempItem = state.data.find( item =>item.id === action.payload.data.id)
            if(TempItem){
                const TempCart = state.data.forEach(element => {
                    if(element.id === action.payload.data.id){
                            const newQty = element.quantity + action.payload.data.quantity
                            const newTotal = newQty*action.payload.data.price
                            return{
                                ...element,quantity:newQty,subTotal:newTotal
                            }
    
                    }
                    else{
                        return element
                    }
                });
                state.data = TempCart
                storeData(state.data)
                console.log(LocallyStoredData())
            }
            else{
                state.data.push(action.payload)
                storeData(state.data)
                console.log(LocallyStoredData())
            }
        },
        getCartTotal(state){
            const cartTotalAmount = state.data.reduce((cartTotal,currentItem)=>{
               return cartTotal += currentItem.subTotal
            })
            return cartTotalAmount
        },
        getCartTotalItems(state){
            const totalNum = state.data.length
            return totalNum
        },
        removeItem(state,action){
            const newCart = state.data.filter(action.payload.data.id !== state.data.id)
            state.data = newCart
            storeData(state.data)
        }
    }
})

export const {addToCart,getCartTotal,removeItem,getCartTotalItems} = cartSlice.actions
export default cartSlice.reducer