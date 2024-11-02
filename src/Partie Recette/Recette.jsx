import React, { useState, useEffect } from 'react';
import './Recette.css';


const Recette = () => {
  const [recette, setRecette] = useState(null);
  const [afficherDetails, setAfficherDetails] = useState(false);

  function RecetteDuJour() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then((res) => (res.json()))
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
    <div className="DialogRecette">
      {recette ? (
        <div>
          <h1>{recette.strMeal}</h1>
          <button onClick={EtatDetails}>Voir la recette du jour</button>

          {afficherDetails && (
            <div className="StyleDialog">
              <div className="DialogContenu">
                <span className="FermerDialog" onClick={EtatDetails}>&times;</span>
                <h2>{recette.strMeal}</h2>
                <img src={recette.strMealThumb}/>
                <h3>Ingrédients :</h3>
                <ul>
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = recette[`strIngredient${index + 1}`];
                    const quantite = recette[`strMeasure${index + 4}`];
                    return (
                      ingredient && (
                        <li key={index}>
                          {ingredient} - {quantite}
                        </li>
                      )
                    );
                  })}
                </ul>
                <h3>Instructions :</h3>
                <p>{recette.strInstructions}</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>Chargement de la recette...</p>
      )}
    </div>
  );
};

export default Recette;
