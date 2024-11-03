import Recette from "./Partie Recette/Recette";
import MocktailOfTheDay from "./mocktail/Mocktail";
import EvenementsHistoriques from "./Event_historique/event";
import { useNavigate } from "react-router-dom";
import Time from "./DateHeure/DateHeure";
import Citation from "./Citation/Citation";
import Blague from "./Blague/Blague";
import React from "react";
import Header from "./Header";
import "../public/assets/styles.css";

const Accueil = () => {
  const navigate = useNavigate();

  function Markdownzone() {
    navigate("/MarkdownZone");
  }

  return (
    <div>
      <div className="Container">
        <Header />
        <div className="main">
          <div className="left">
            <Blague></Blague>
            <Citation></Citation>
            <div className="Historique">
              <Recette></Recette>
            </div>
          </div>
          <div className="center">
            <div>
              <Time />
              <button className="markdown-button" onClick={Markdownzone}>
                Creer un fichier Markdown
              </button>
            </div>
          </div>

          <div className="right">
            <MocktailOfTheDay></MocktailOfTheDay>
            <EvenementsHistoriques></EvenementsHistoriques>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
