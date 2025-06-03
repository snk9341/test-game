import '/src/css/reset.css';
import '/src/css/App.css';

function Background () {
  return (
  <>
    <div className="background-game">
      <img src="/src/assets/origbig.png" alt="background" />
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