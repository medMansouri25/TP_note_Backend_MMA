// Description: Serveur de l'application
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import des routes
const userRoutes = require("./routes/userRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const recipeRoutes = require("./routes/recipeRoutes");
const rhumRoutes = require("./routes/rhumRoutes");

const app = express();
const PORT = 3003;

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connecté"))
.catch(err => console.error("Erreur MongoDB:", err));

// Route test pour vérifier si le serveur fonctionne
app.post('/test', (req, res) => {
    res.json({ message: "La route POST fonctionne !" });
});

// Définition des routes
app.use("/api/users", userRoutes);
app.use("/api/ingredients", ingredientRoutes);
app.use("/api/recipes", recipeRoutes);
app.use("/api/rhums", rhumRoutes);

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
