import React from 'react';
import { RandomPattern } from './components/random-pattern/RandomPattern';
import './App.css';

function App() {
  return (
    <div className="App">
      {[...Array(28)].map((e, i) => 
      <RandomPattern />
      )}
    </div>
  );
}

export default App;
