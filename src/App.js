import React, { useEffect } from 'react';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';


import Header from './Components/Header'
import Footer from './Components/Footer'
import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import RecipeScreen from './screens/RecipeScreen';
import BreakfastScreen from './screens/BreakfastScreen';
import AboutScreen from './screens/AboutScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import CartScreen from './screens/CartScreen';
import SingleProductScreen from './screens/SingleProductScreen';
import PromotionScreen from './screens/PromotionScreen';
import PromoDescriptionScreen from './screens/PromoDescriptionScreen';
import AuthScreen from './screens/AuthScreen';
import {useSelector, useDispatch} from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import Authentic from './firebase';
import { Login, logOut } from './app/features/userSlice';
import ProfileScreen from './screens/ProfileScreen';



function App() {
  const dispatch = useDispatch()
  const USER = useSelector((state)=>state.user.data)
 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Authentic,(userAuth)=>{
      if(userAuth){
        const currentUser =  userAuth.auth.currentUser
        const  {auth,proactiveRefresh,stsTokenManager,providerdata,reloadUserInfo, ...newUser} =currentUser
        dispatch(Login({user:newUser}))
     
      }
      else{
        dispatch(logOut())
      }
    })
    return unsubscribe
  },[dispatch])
  return (
    <div className="App">
      <Header/>
        <Router>
          <Routes>
            <Route exact path = "/" element={<HomeScreen/>} />
            <Route exact path = "/shop" element={<ShopScreen/>} />
            <Route exact path = "/recipe" element={<RecipeScreen/>} />
            <Route exact path = "/breakfast" element={<BreakfastScreen title={'BreakFast Purchase'}/>} />
            <Route exact path = "/fruit" element={<BreakfastScreen title={'Fruit Purchase'}/>} />
            <Route exact path = "/protein" element={<BreakfastScreen title={' Protein Purchase'}/>} />
            <Route exact path = "/about" element={<AboutScreen/>} />
            <Route exact path = "/delivery" element={<DeliveryScreen/>} />
            <Route exact path = "/cart" element={<CartScreen/>} />
            <Route exact path = "/product" element={<SingleProductScreen/>} />
            <Route exact path = "/promotion" element={<PromotionScreen/>} />
            <Route exact path = "/promoDescription" element={<PromoDescriptionScreen/>} />
            <Route exact path = "/auth" element={<AuthScreen/>} />
            
            {/* // Add the route for the profile Screen.. depending on the user */}
          {USER && ( <Route exact path = "/profiles" element={<ProfileScreen/>} />)} 
          
          </Routes>
        </Router>

      <Footer/> 
       
     
    </div>
  );
}

export default App;
