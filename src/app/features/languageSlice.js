import { createSlice }from "@reduxjs/toolkit";
import { loadLocalStorage, pullLocalStorage } from "../../Components/utils/LocalStorageOperations";

const LocallyStoredData = ()=>{
   const lang = pullLocalStorage("language")
   let langString
   if(!lang){
    loadLocalStorage('en','language')
    langString = pullLocalStorage('language')
   }
  else{
    langString =''
  }
  return langString
}

const languageSlice = createSlice({
    name:'language',
    initialState:{
        data:LocallyStoredData(),
      },
    reducers:{
        setlanguage:(state,action)=>{
            state.data = action.payload
            loadLocalStorage(action.payload,'language')
        },
    },
    

})
export const{setlanguage}=languageSlice.actions
export default languageSlice.reducer
