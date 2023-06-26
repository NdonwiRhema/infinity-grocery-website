import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name:'user',
        initialState:{
            data:null,
        },
        reducers:{
            Login:(state,action)=>{
                     state.data = action.payload
            },
            logOut:(state)=>{
                state.data = null
            }
        }
    }
)
export const {Login,logOut} =userSlice.actions
export default userSlice.reducer