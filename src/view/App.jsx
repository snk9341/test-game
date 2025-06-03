import './reset.css';
import './App.css';

function Background () {
  return (
  <>
    <div className="background-game">
      <img src="/origbig.png" alt="background" />
    </div>
  </>
  );
}

function App() {
  return (
    <div className="App">
      <Background />
    </div>
  );
}

export default App;