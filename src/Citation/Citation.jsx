import { useState, useEffect } from "react";
import "./Citation.css";

function Citation() {
  const [citation, setCitation] = useState({});

  function fetchCitation() {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => setCitation(data.slip))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchCitation();
  }, []);

  return (
    <div className="container-api">
      <h1 className="container-title">Citation</h1>
      <ul className="list">
        <li className="list-item">{citation.advice}</li>
      </ul>
    </div>
  );
}

export default Citation;
