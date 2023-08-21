import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pullAll } from "../../Components/utils/FirebaseOperations";
import { loadLocalStorage } from "../../Components/utils/LocalStorageOperations";

export const productThunk = createAsyncThunk('product/fetchProduct',()=>{
    return pullAll("Products").then((response)=>response)
})


const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        isLoading:false,
        error:'' // for locale storage reasons 
         
    },
    reducers:{
        setProduct: (state,action)=>{
            state.data = action.payload
        },
        
        // setAllFruitProducts: (state,action)=>{
        //     state.allFruitProducts = action.payload
        // }
    },
    extraReducers:(builder)=>{
        builder.addCase(productThunk.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(productThunk.fulfilled,(state,action)=>{
            const response = action.payload
            state.isLoading =false
            let tempArr =[]
            response.forEach(item =>{
                const productData = item.data()
                tempArr.push(productData)
                              })
           state.data = tempArr
           loadLocalStorage(tempArr,"AllProducts")
          
        })
        builder.addCase(productThunk.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.error.message
        })
    }

})

export const {setProduct} = productSlice.actions
export default productSlice.reducer
