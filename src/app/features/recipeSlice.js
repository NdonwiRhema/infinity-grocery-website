import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const recipeThunk = createAsyncThunk('recipe/fetchRecipe',()=>{
  return  axios.get('https://api.escuelajs.co/api/v1/categories/5/products').then(
        (response)=>response.data
    )
})
const recipeSlice = createSlice({
    name:'recipe',
    initialState:{
        data:[],
        isLoading:false,
        error:'',
        activeRecipe:''
    },
    reducers:{
        setRecipe:(state,action)=>{
            state.data = action.payload
        },
        setLoading:(state)=>{
            state.isLoading = !state.isLoading
        },
        setActiveRecipe:(state,action)=>{
            state.activeRecipe = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(recipeThunk.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(recipeThunk.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(recipeThunk.rejected,(state,action)=>{
            state.error = action.error.message
            state.isLoading = false
            state.data = []
        })
    }

})
export const{setRecipe,setLoading}=recipeSlice.actions
export default recipeSlice.reducer
