// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { marked } from "marked";

function Markdownzone() {
  // Création d'état pour le contenu du fichier
  const [markdown, setMarkdown] = useState(""); // État pour le contenu en Markdown
  const [fileName1, setFileName] = useState("Document.md"); // État pour le nom du fichier, par défaut un nom

  // EXPORT

  const exportMarkdown = () => {
    const blob = new Blob([markdown], { type: "text/markdown" }); // Crée un Blob avec le contenu Markdown / Blob = objet représentant un fichier de données et "type :" aide le navigateur à identifier le type de contenu que le Blob contient
    const link = document.createElement("a"); // Crée un lien (Ce lien sera utilisé pour déclencher le téléchargement.)
    link.href = URL.createObjectURL(blob); // Crée une URL temporaire pour le Blob
    link.download = fileName1; // Définit le nom du fichier
    link.click(); // Simule le clic sur le lien pour déclencher le téléchargement
  };

  // IMPORT

  const importMarkdown = (event) => {
    const file = event.target.files[0]; // comme cest un tableau de fichier faire [0]

    const reader = new FileReader(); // Crée une instance de FileReader, un objet JavaScript permettant de lire le contenu des fichiers sélectionnés via un <input type="file">

    reader.onload = (e) => {
      // fonction de rappel (callback) qui sera appelée lorsque le fichier sera lu avec succès

      const content = e.target.result; // Récupère le contenu du fichier lu par FileReader

      setMarkdown(content); // Met à jour l'état de markdown avec le contenu du fichier, ce qui permet d'afficher le texte et de le prévisualiser
    };

    if (file) {
      reader.readAsText(file); // Lit le contenu du fichier sélectionné et déclenche l'événement 'load' une fois la lecture terminée (sert à traiter le contenu)
      //(bout de code important qui nous a débloqués, solution trouvée ici https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsText)
    }
  };

  // EDIT

  return (
    <div>
      <h2>Éditeur de Markdown</h2>

      <div>
        <label>Titre du fichier :</label>
        <input
          type="text"
          placeholder="Titre du fichier"
          value={fileName1}
          onChange={(e) => setFileName(e.target.value)}
        />
      </div>

      <div>
        <h3>Édition du texte</h3>
        <textarea
          value={markdown} // Liaison de markdown avec le textarea
          onChange={(e) => setMarkdown(e.target.value)} // Mise à jour de markdown quand le texte change e=evenement et viens modifier la valeur de markdown
          placeholder="Écris ici ton contenu en Markdown"
          rows={"10"}
        ></textarea>
      </div>

      <div>
        <h3>Prévisualisation</h3>
        <div
          dangerouslySetInnerHTML={{ __html: marked(markdown) }} // 1. dangerouslySetInnerHTML est utilisé pour insérer du HTML brut dans un composant React, ignore la securité contre les attaques XSS
          // __html permet d'indiquer à React que nous allons lui donner du html brut
          // marked() permet de convertir le markdown en html.
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "50%",
          }}
        ></div>
      </div>

      <div style={{ marginTop: "10px" }}>
        <button onClick={exportMarkdown}>Exporter en Markdown</button>
      </div>

      <div>
        <h3>Importer un fichier Markdown</h3>
        <input type="file" accept=".md" onChange={importMarkdown} />
      </div>
    </div>
  );
}

export default Markdownzone;

// Pour la ligne 70 on a premierement fait <div>{marked(markdown)}</div> sauf que nous avons eu le html sous forme de balise (HTML brut) , ce qui a été réglé par la propriété  dangerouslySetInnerHTML

// https://www.youtube.com/shorts/XINblOkpkPc?app=desktop vidéo du dangerouslySetInnerHTML

// Pour l'export solution trouvé dans cette vidéo https://youtu.be/xf0bJzaRlFA?si=_q2LQPGVnpWUdHaG

// Pour l'import https://stackoverflow.com/questions/51272255/how-to-use-filereader-in-react

// On a préféré marked à showdown pour des raisons de rapidités et de simplicité, Showdown conviendra mieux cependant pour un projet plus personnalisés
