import { useEffect, useState } from "react";
import "./Mocktail.css";

function MocktailOfTheDay() {
  const [mocktails, setMocktails] = useState([]);
  const [randomMocktail, setRandomMocktail] = useState(null);

  function fetchDrinks() {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
    )
      .then((res) => res.json())
      .then((data) => {
        setMocktails(data.drinks);
        pickRandomMocktail(data.drinks);
      })
      .catch((err) => console.error("Erreur : ", err));
  }

  function pickRandomMocktail(drinks) {
    const randomIndex = Math.floor(Math.random() * drinks.length);
    setRandomMocktail(drinks[randomIndex]);
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <div className="mocktail-container">
      {randomMocktail ? (
        <div className="mocktail-card">
          <h1 className="mocktail-title">Mocktail du jour</h1>
          <p className="mocktail-name">
            Le mocktail du jour est : {randomMocktail.strDrink}
          </p>
          <img
            className="mocktail-image"
            src={randomMocktail.strDrinkThumb}
            alt=""
          />
        </div>
      ) : (
        <p className="loading-text">Chargement...</p>
      )}
    </div>
  );
}

export default MocktailOfTheDay;
