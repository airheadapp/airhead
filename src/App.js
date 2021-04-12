
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

        <div className="medApp">
          {/* dynamically created content goes here
           */}
          
          {/* buttons */}
          {/* will be replaced by meditation animation and timer */}

          {/* button appears on top of animation, as animation fades in background - opacity */}
        </div>


    </div>
  );
}

export default App;
