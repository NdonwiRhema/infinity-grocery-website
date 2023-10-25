import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadLocalStorage, pullLocalStorage } from "../../Components/utils/LocalStorageOperations";
import { pullWhere } from "../../Components/utils/FirebaseOperations";

export const uiThunk = createAsyncThunk('ui/fetchUi',()=>{
    return pullWhere("Ui",'status','active','==').then((response)=>response)
})

const uiSlice = createSlice({
    name:'ui',
    initialState:{
        data:pullLocalStorage('AllUi'),
        isLoading:false,
        error:''
    },
    reducers:{
        loadUi:(state,action)=>{
            state.data = action.payload
        },
        loadLocalfromState:(state)=>{
            const entry = state.data
            loadLocalStorage(entry,"AllUi")
        },
        loadStateFromLocal:(state)=>{
            const entry = pullLocalStorage("AllUi")
            state.data = entry
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(uiThunk.pending,(state)=>{
            state.isLoading =true
        })
        builder.addCase(uiThunk.fulfilled,(state,action)=>{
            const response = action.payload       
            state.isLoading =false
            let tempArr =[]
            response.forEach(item =>{
                const uiData = item.data()
                tempArr.push(uiData)
                              })
           state.data = tempArr
           loadLocalStorage(tempArr,"AllUi")
          
        })
        builder.addCase(uiThunk.rejected,(state,action)=>{
            state.error = action.error.message
            state.isLoading =false
        })

    }
})

export const {loadUi,loadLocalfromState,loadStateFromLocal} = uiSlice.actions
export default uiSlice.reducer