import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pullAll } from "../../Components/utils/FirebaseOperations";
import { loadLocalStorage } from "../../Components/utils/LocalStorageOperations";


export const recipeThunk = createAsyncThunk('recipe/fetchRecipe',()=>{
    return pullAll("Recipes").then((response)=>response)

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
            const response = action.payload       
            state.isLoading =false
            let tempArr =[]
            response.forEach(item =>{
                const recipeData = item.data()
                tempArr.push(recipeData)
                              })
           state.data = tempArr
           loadLocalStorage(tempArr,"AllRecipes")
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
