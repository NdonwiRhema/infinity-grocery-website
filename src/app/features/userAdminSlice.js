import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";


const AdminThunk = createAsyncThunk('admin/get',(uid)=>{
    const docRef = doc(db,"Users",uid)
    getDoc(docRef).then((docSnapShot)=>{
        if(docSnapShot.exists()){
            const dbData = docSnapShot.data()
            if(dbData.isSuperAdmin || dbData.isAdmin){
                return dbData
            }
        }
    })
})
const userAdminSlice = createSlice({
    name:'adminUser',
    initialState:{
        data:null,
       
    },
    reducers:{
        adminLogin:(state,action)=>{
           // const test= action.payload.user
          
           
        },
        adminLogOut:(state)=>{
            state.data =null
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(AdminThunk.fulfilled,(state,action)=>{
            state.data = action.payload
        })
        builder.addCase(AdminThunk.rejected,(state)=>{
            state.data = null
        })
    }
})

export const {adminLogOut,adminLogin} = userAdminSlice.actions
export default userAdminSlice.reducer