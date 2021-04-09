
import './App.css';
import Buttons from './Buttons';
import Meditation from './Meditation';

function App() {
  return (
    <div className="App">
      <header>
        <h1>airhead</h1>
        <p>A meditation app to help you meditate</p>
      </header>

        <Buttons />
{/* buttons */}
{/* will be replaced by meditation animation and timer */}
        <Meditation />
{/* button appears on top of animation, as animation fades in background - opacity */}
    </div>
  );
}

export default App;
