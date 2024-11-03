import Recette from "./Partie Recette/Recette";
import MocktailOfTheDay from "./mocktail/Mocktail";
import EvenementsHistoriques from "./Event_historique/event";
import { useNavigate } from "react-router-dom";
import Time from "./DateHeure/DateHeure";
import Citation from "./Citation/Citation";
import Blague from "./Blague/Blague";
import React from "react";
import Header from "./Header";
import "../public/assets/styles.css"


const Accueil = () => {
  const navigate = useNavigate();

  function Markdownzone() {
    navigate("/MarkdownZone");
  }

  return (
    <div>
      <div className="Container">
      <Header />
        <div className="Top">
          <Time></Time>
        </div>

        <div className="main">

        <div className="left">
          <Blague></Blague>
          <Citation></Citation>
          <div className="Historique">
          <Recette></Recette>
          </div>
        </div>

        <div className="center">
          <h1>Hey</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            perspiciatis, eos soluta quod reiciendis quisquam, repudiandae
            quibusdam dicta doloribus facilis illum voluptates, labore nulla
            beatae voluptatum qui deserunt vero blanditiis! Maxime corrupti ad
            quasi id reprehenderit ab voluptatem enim omnis molestiae quam
            mollitia autem impedit odit, nobis beatae expedita odio dolorum modi
            quidem, at eligendi eveniet! Nisi vitae tenetur architecto.
            Molestiae quos maxime, atque praesentium, asperiores quas est a enim
            vel repellat, sint dolores nulla accusantium suscipit. Cumque libero
            sapiente mollitia atque nesciunt iure, nobis aliquid minima impedit
            quas similique!
          </p>
          <div>
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