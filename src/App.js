import React from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';



import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import ShopScreen from './screens/ShopScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path = "/" element={<HomeScreen/>} />
          <Route exact path = "/shop" element={<ShopScreen/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
