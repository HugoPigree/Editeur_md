import React, { useState, useEffect } from 'react';

const Time = () => {
  
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  // Fonction pour obtenir l'heure actuelle (Fonction trouver grace à GPT )
  const getCurrentTimeAndDate = () => {
    const now = new Date();
    
    // Récupération des heures et des minutes
    const hours = now.getHours();
    const minutes = now.getMinutes();

    // Formatage de l'heure et des minutes avec un format HH:MM
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    // Formatage de la date uniquement sans l'heure (Mon Oct 21 2024)
    const formattedDate = now.toDateString();

    
    setTime(formattedTime);
    setDate(formattedDate);
  };

  
  useEffect(() => {
    
    getCurrentTimeAndDate();

    // Intervalle pour mettre à jour chaque minute
    const intervalId = setInterval(getCurrentTimeAndDate, 60000);

    // Nettoyage de l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>Heure actuelle</h1>
      <p>Date :  {date}</p>
      <p>Time (Heure:Minute) {time}</p>
    </div>
  );
};

export default Time;
