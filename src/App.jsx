import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./Accueil";
import MarkdownZone from "./MarkdownZone";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/MarkdownZone" element={<MarkdownZone />} />
      </Routes>
    </Router>
  );
}

export default App;
