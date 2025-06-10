import { useState } from "react";
import { useEffect } from "react";
import '/src/css/reset.css';
import '/src/css/App.css';
import '/src/css/font.css';
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

function Home_Page() {
  return (
    <div className="background-home-page">
      <div className="title-game">
        <span className="joti-one-regular title-text-game">Mon futur jeu</span>
      </div>
    </div>
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
      <Home_Page />
    </div>
  );
}

export default App;