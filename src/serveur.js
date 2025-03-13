
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const ingredientRoutes = require('./routes/ingredientRoutes');
const userRoutes = require('./routes/userRoutes');

const PORT = 3003; // Définir le port

const app = express();
app.use(express.json()); 

// Connexion à la base de données MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connecté'))
  .catch((err) => console.error(err));

// Utiliser les routes
app.use('/api/ingredients', ingredientRoutes);
app.use('/api/users', userRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur http://localhost:${PORT}`);
});
