import { configureStore } from '@reduxjs/toolkit';
import activeNavReducer from './features/activeNavSlice';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice'
import recipeReducer from './features/recipeSlice'
import userReducer from './features/userSlice'

export const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
    product:productReducer, 
    cart:cartReducer,
    recipe:recipeReducer,
    user:userReducer,
  },
});
