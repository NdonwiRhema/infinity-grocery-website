import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import RecipeScreen from './screens/RecipeScreen';
import BreakfastScreen from './screens/BreakfastScreen';
import AboutScreen from './screens/AboutScreen';
import DeliveryScreen from './screens/DeliveryScreen';
import CartScreen from './screens/CartScreen';
import SingleProductScreen from './screens/SingleProductScreen';

function App() {
  return (
    <div className="App">
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
