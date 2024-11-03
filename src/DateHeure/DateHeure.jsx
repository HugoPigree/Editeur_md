import React, { useState, useEffect } from "react";
import "./DateHeure.css";

const Time = () => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const getCurrentTimeAndDate = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}`;
    const formattedDate = now.toDateString();
    setTime(formattedTime);
    setDate(formattedDate);
  };

  useEffect(() => {
    getCurrentTimeAndDate();
    const intervalId = setInterval(getCurrentTimeAndDate, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="time-container">
      <h1 className="time-title">Heure actuelle</h1>
      <p className="date-display">Date : {date}</p>
      <p className="time-display">Time (Heure:Minute) {time}</p>
    </div>
  );
};

export default Time;
