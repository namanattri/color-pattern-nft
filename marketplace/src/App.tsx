import React from 'react';
import { Pattern } from './components/pattern/Pattern';
import './App.css';

function App() {
  return (
    <div className="App">
      {[...Array(28)].map((e, i) => 
      <Pattern />
      )}
    </div>
  );
}

export default App;
