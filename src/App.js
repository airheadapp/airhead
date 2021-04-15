import './App.css';
import Meditation from './Meditation';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <header>
          <h1>airhead</h1>
          <p>a meditation app to help you clear your head</p>
        </header>
          <Meditation />
      </div>
      <Footer />
    </div>
  );
}

export default App;
