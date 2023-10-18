import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {pullDoubleConditions,pullWhere } from "../../Components/utils/FirebaseOperations";
import { loadLocalStorage, pullLocalStorage } from "../../Components/utils/LocalStorageOperations";

export const productThunk = createAsyncThunk('product/fetchProduct',(language)=>{
    return pullWhere("Products",'language',language,'==')
})
export const latestProductThunk = createAsyncThunk('product/recentProduct',(language,frame)=>{
    // return pullAll("Products").then((response)=>response)
   return pullDoubleConditions("Products",'language',language,'==','lastModified',frame,'>=').then((response)=>response)
})


const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        active:{},
        isLoading:false,
        error:'' 
         
    },
    reducers:{
        setProduct: (state,action)=>{
            state.data = action.payload
            
        },
        setActive:(state,action)=>{
            state.active = action.payload
        }
       
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
           loadLocalStorage(Date.now(),"lastmodified")
          
        })
        builder.addCase(productThunk.rejected,(state,action)=>{
            state.isLoading=false
            state.error = action.error.message
        })
        builder.addCase(latestProductThunk.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(latestProductThunk.fulfilled,(state,action)=>{
            state.isLoading = false
            const response = action.payload
            let tempArr =[]
            response.forEach(item =>{
                const productData = item.data()
                tempArr.push(productData)
                              })
         const oldArr = pullLocalStorage("AllProducts")
         const updatedArray = [...tempArr,...oldArr]
           state.data = updatedArray
          loadLocalStorage(updatedArray,"AllProducts")
          loadLocalStorage(Date.now(),"lastmodified")
          

        })
    }

})

export const {setProduct,setActive} = productSlice.actions
export default productSlice.reducer
