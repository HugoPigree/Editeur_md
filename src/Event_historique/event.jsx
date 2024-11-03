import React, { useState, useEffect } from "react";

function EvenementsHistoriques() {
  const [evenements, setEvenements] = useState([]); //crée un état evenements, initialisé avec un tableau vide.

  // Appel à l'API
  useEffect(() => {
    // useEffect est utilisé pour effectuer une action (comme un appel à une API) lorsque le composant est chargé pour la première fois.
    //Cela permet d'obtenir des données sans que l'appel se répète à chaque fois que le composant se met à jour.

    fetch("https://history.muffinlabs.com/date")
      .then((response) => response.json()) // Prend la réponse brute de l'API et la conversion en objet JSON.
      .then((data) => {
        // Récupère seulement les événements
        const events = data.data.Events.slice(0, 2); // Limite à 5 événements
        setEvenements(events);
      });
  });

  return (
    <div className="container-api">
      <h1>Événements Historiques</h1>
      <ul className="list">
        {evenements.map((event) => (
          <li>
            {event.year} - {event.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default EvenementsHistoriques;
