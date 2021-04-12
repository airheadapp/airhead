
import './App.css';
import Buttons from './Buttons';
import Meditation from './Meditation';
import { useState } from 'react';

function App() {


  return (
    <div className="App">
      <header>
        <h1>airhead</h1>
        <p>a meditation app to help you meditate</p>
      </header>

            <Buttons />
            <Meditation />

            

    </div>
  );
}

export default App;
