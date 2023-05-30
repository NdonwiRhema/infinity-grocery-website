import { createSlice } from "@reduxjs/toolkit";
import axios from '../../data/Axios';
import STATUS from "../../data/Status";
import Requests from "../../data/Requests";

const productSlice = createSlice({
    name:'product',
    initialState:{
        data:[],
        status:STATUS.IDLE,
        allFruitProducts:[] // for locale storage reasons 
         
    },
    reducers:{
        setProduct: (state,action)=>{
            state.data = action.payload.data
        },
        setStatus: (state,action)=>{
            state.status = action.payload
        },
        setAllFruitProducts: (state,action)=>{
            state.allFruitProducts = action.payload
        }
    }

})

export const {setAllFruitProducts,setProduct,setStatus} = productSlice.actions
export default productSlice.reducer
export const fetchProducts =() =>{
    // const config ={
    //     headers:{
    //         "Access-Control-Allow-Origin":"*",
    //         "crossorigin":true,
    //         "cors":true,
    //         "Access-Control-Allow-Headers":true
    //     }
    // }
    return async function fetchProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try {
                const datum = await axios.get(Requests.Allproducts)
                console.log('data from rtk   '+datum)
                dispatch(setProduct(datum))
            dispatch(setStatus(STATUS.IDLE))
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
            console.log(error)
        }
    }
}
export const fetchFruitProducts=()=>{
    return async function fetchFruitProductThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING))
        try {
            const datum = await axios.get(Requests.fruitProduct,{crossdomain:true})
            const data = await datum.json()
            console.log('data from rtk   '+data)
            dispatch(setAllFruitProducts(data))
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR))
        }
        dispatch(setStatus(STATUS.IDLE ))
    }
}