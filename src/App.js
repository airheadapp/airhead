
import './App.css';
import Meditation from './Meditation';
import { useState } from 'react';
import Timer from './Timer';
import Footer from './Footer';

function App() {


  return (
    <div className="App">
      <header>
        <h1>airhead</h1>
        <p>a meditation app to help you meditate</p>
      </header>
            <Timer />
            <Meditation />
            <Footer />

    </div>
  );
}

export default App;
