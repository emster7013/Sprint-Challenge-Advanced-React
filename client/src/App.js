import React from 'react';
import './App.css';
import NavBar from '../src/components/NavBar.js';
import Data from '../src/components/Data';
function App() {
  return (
    <div className="App">
      <h1 data-testid='homepage-title'>Womens World Cup!</h1>
     <Data/>
     <NavBar/>
    </div>
  );
}

export default App;
