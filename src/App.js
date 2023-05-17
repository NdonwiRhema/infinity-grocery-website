import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import ShopScreen from './screens/ShopScreen';
import RecipeScreen from './screens/RecipeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<HomeScreen/>} />
          <Route exact path = "/shop" element={<ShopScreen/>} />
          <Route exact path = "/recipe" element={<RecipeScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
