import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadLocalStorage, pullLocalStorage } from "../../Components/utils/LocalStorageOperations";
import { pullWhere } from "../../Components/utils/FirebaseOperations";

export const categoryThunk = createAsyncThunk('category/fetchCategory',(language)=>{
    return pullWhere("Category","lang",language,'==').then((response)=>response)
})

const categorySlice = createSlice({
    name:'category',
    initialState:{
        data:pullLocalStorage(),
        isLoading:false,
        error:''
    },
    reducers:{
        loadCategory:(state,action)=>{
            state.data = action.payload
        },
        loadLocalfromState:(state)=>{
            const entry = state.data
            loadLocalStorage(entry,"AllCategory")
        },
        loadStateFromLocal:(state)=>{
            const entry = pullLocalStorage("AllCategory")
            state.data = entry
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(categoryThunk.pending,(state)=>{
            state.isLoading =true
        })
        builder.addCase(categoryThunk.fulfilled,(state,action)=>{
            const response = action.payload       
            state.isLoading =false
            let tempArr =[]
            response.forEach(item =>{
                const productData = item.data()
                tempArr.push(productData)
                              })
           state.data = tempArr
           loadLocalStorage(tempArr,"AllCategory")
          
        })
        builder.addCase(categoryThunk.rejected,(state,action)=>{
            state.error = action.error.message
            state.isLoading =false
        })

    }
})

export const {loadCategory,loadLocalfromState,loadStateFromLocal} = categorySlice.actions
export default categorySlice.reducer