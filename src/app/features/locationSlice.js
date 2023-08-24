import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { pullAll } from "../../Components/utils/FirebaseOperations";
import { loadLocalStorage } from "../../Components/utils/LocalStorageOperations";


export const locationThunk = createAsyncThunk('recipe/fetchRecipe',()=>{
    return pullAll("Locations").then((response)=>response)

})
const locationSlice = createSlice({
    name:'recipe',
    initialState:{
        data:[],
        isLoading:false,
        error:'',
        activeLocation:''
    },
    reducers:{
        setlocation:(state,action)=>{
            state.data = action.payload
        },
        setLoading:(state)=>{
            state.isLoading = !state.isLoading
        },
        setActiveLocation:(state,action)=>{
            state.activeLocation = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(locationThunk.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(locationThunk.fulfilled,(state,action)=>{
            const response = action.payload       
            state.isLoading =false
            let tempArr =[]
            response.forEach(item =>{
                const locationData = item.data()
                tempArr.push(locationData)
                              })
           state.data = tempArr
           loadLocalStorage(tempArr,"AllLocations")
        })
        builder.addCase(locationThunk.rejected,(state,action)=>{
            state.error = action.error.message
            state.isLoading = false
            state.data = []
        })
    }

})
export const{setlocation,setLoading,setActiveLocation}=locationSlice.actions
export default locationSlice.reducer
