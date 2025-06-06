import { useState } from "react";
import { useEffect } from "react";
import '/src/css/reset.css';
import '/src/css/App.css';
import Swordsman_animator from './animation/animation-swordsman';
import Archer_animator from "./animation/animation-archer";
import Wizard_animator from "./animation/animation-wizard";

function Background() {
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
  const [archer, setArcher] = useState([]);
  const [wizard, setWizard] = useState([]);

  const getSwordsmanData = function () {
    fetch("/data-animation/Swordsman.json")
      .then((res) => res.json())
      .then((data) => {
        setSwordsman(data);
      });
  };

  const getArcherData = function () {
    fetch("/data-animation/Archer.json")
      .then((res) => res.json())
      .then((data) => {
        setArcher(data);
      });
  };

  const getWizardData = function () {
    fetch("/data-animation/Wizard.json")
      .then((res) => res.json())
      .then((data) => {
        setWizard(data);
      });
  };

  useEffect(() => {
    getSwordsmanData();
    getArcherData();
    getWizardData();
  }, []);



  return (
    <div className="App">
      <Background />
      <div className="gamePlayer">
        {swordsman.length > 0 &&
          <Archer_animator
            data={archer[4]}
            stopAnimation={false}
          />
        }
        <div className="second-player">
          {archer.length > 0 &&
            <Swordsman_animator
              data={swordsman[2]}
              stopAnimation={false}
            />}
          <div className="third-player">
            {wizard.length > 0 &&
              <Wizard_animator
                data={wizard[2]}
                stopAnimation={false}
              />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;