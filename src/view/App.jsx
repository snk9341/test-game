import { useState } from "react";
import { useEffect } from "react";
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

  const [swordsman, setSwordsman] = useState([]);

  const getSwordsmanData = function () {
    fetch("/data-animation/Swordsman.json")
      .then((res) => res.json())
      .then((data) => {
        setSwordsman(data);
      });
  };

  useEffect(() => {
    getSwordsmanData();
  }, []);



  return (
    <div className="App">
      <Background />
      <div className="gamePlayer">
        <HeroSprite
        data={swordsman}
        stopAnimation={false}
/>
      </div>
    </div>
  );
}

export default App;