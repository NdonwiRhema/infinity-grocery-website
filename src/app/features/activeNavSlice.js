import { createSlice } from "@reduxjs/toolkit";


export const activeNavSlice = createSlice({
    name:'activeNav',
    initialState:{
        activeNav:null
    },
    reducers:{
            // actions for the state
            clicked:(state,action)=>{
                state.activeNav = action.payload
                console.log(state.activeNav)
            },
    }
})

export const{clicked} = activeNavSlice.actions

export const selectActive =(state)=> state.activeNav.activeNav

export default activeNavSlice.reducer