import { createSlice }from "@reduxjs/toolkit";
import { loadLocalStorage, pullLocalStorage } from "../../Components/utils/LocalStorageOperations";

const LocallyStoredData = ()=>{
   const lang = pullLocalStorage("language").length
   let languageSelected
   if(lang === 0 ){
    loadLocalStorage("fr","language")
    languageSelected = pullLocalStorage("language")
   }
   else{
    languageSelected = pullLocalStorage("language")
   }
  return languageSelected
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
