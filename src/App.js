import './App.css';
import Meditation from './Meditation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <header>
        <h1>airhead</h1>
        <p>a meditation app to help you clear your head</p>
      </header>
            <Meditation />
            <Footer />
    </div>
  );
}

export default App;
