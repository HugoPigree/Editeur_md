import { useState, useEffect } from "react";
import "./Blague.css";

function Blague() {
  const [blague, setBlague] = useState({});

  function fetchCitation() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((res) => res.json())
      .then((data) => setBlague(data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  return (
    <div className="blague-container">
      <h1 className="blague-title">Blague du jour</h1>
      <ul className="blague-list">
        <li className="blague-item">Type : {blague.type}</li>
        <li className="blague-item">Setup : {blague.setup}</li>
        <li className="blague-item">Punchline : {blague.punchline}</li>
      </ul>
    </div>
  );
}

export default Blague;
