const express = require("express");

// app.js
const app = express();  // Initialiser l'application express                

const PORT =3002;  // Définir le port

app.get('/Rhum', (req, res) => {
    res.send('Hello World!');  // Répondre avec un message
});
// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
});

