import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Acceuil from "./Acceuil";
import MarkdownZone from "./MarkdownZone";
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/MarkdownZone" element={<MarkdownZone />} />
      </Routes>
    </Router>
  );
}

export default App;
