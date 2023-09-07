import { configureStore } from '@reduxjs/toolkit';
import activeNavReducer from './features/activeNavSlice';
import productReducer from './features/productSlice';
import cartReducer from './features/cartSlice'
import recipeReducer from './features/recipeSlice'
import locationReducer from './features/locationSlice'
import userReducer from './features/userSlice'
import userAdminReducer from './features/userAdminSlice';
import categoryReducer from './features/categorySlice'
import languageReducer from './features/languageSlice';

export const store = configureStore({
  reducer: {
    activeNav: activeNavReducer,
    product:productReducer, 
    cart:cartReducer,
    recipe:recipeReducer,
    user:userReducer,
    adminUser:userAdminReducer,
    category:categoryReducer,
    locations:locationReducer,
    language:languageReducer,
  },
});
