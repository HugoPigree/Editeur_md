import React, { useState, useEffect } from "react";
import "./Recette.css";

const Recette = () => {
  const [recette, setRecette] = useState(null);
  const [afficherDetails, setAfficherDetails] = useState(false);

  function RecetteDuJour() {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => setRecette(data.meals[0]))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    RecetteDuJour();
  }, []);

  const EtatDetails = () => {
    setAfficherDetails(!afficherDetails);
  };

  return (
    <div className="recette-container">
      {recette ? (
        <div className="recette-content">
          <h1 className="recette-title">{recette.strMeal}</h1>
          <button className="recette-button" onClick={EtatDetails}>
            Voir la recette du jour
          </button>

          {afficherDetails && (
            <div className="dialog-overlay">
              <div className="dialog-content">
                <span className="dialog-close" onClick={EtatDetails}>
                  &times;
                </span>
                <h2 className="dialog-title">{recette.strMeal}</h2>
                <img
                  className="dialog-image"
                  src={recette.strMealThumb}
                  alt={recette.strMeal}
                />
                <h3 className="ingredients-title">IngrÃ©dients :</h3>
                <ul className="ingredients-list">
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = recette[`strIngredient${index + 1}`];
                    const quantite = recette[`strMeasure${index + 1}`];
                    return (
                      ingredient && (
                        <li className="ingredients-item" key={index}>
                          {ingredient} - {quantite}
                        </li>
                      )
                    );
                  })}
                </ul>
                <h3 className="instructions-title">Instructions :</h3>
                <p className="instructions-content">
                  {recette.strInstructions}
                </p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p className="loading-text">Chargement de la recette...</p>
      )}
    </div>
  );
};

export default Recette;
