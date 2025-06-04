import '/src/css/reset.css';
import '/src/css/App.css';
import HeroSprite from './animation/animation';

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
      <div className="gamePlayer">
        <HeroSprite
        character={"Wizard"}      
        status={"Idle.png"}
        width={128}
        height={128} 
        scale={0.5}
        direction={"vertical"}
        shouldAnimate= {true}
        frameCount={4}
        stopAnimation={false}
        fps={8}
/>
      </div>
    </div>
  );
}

export default App;