// Description: Serveur de l'application
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3003;

app.use(express.json());
app.use(cors());

//mongoose.connect(process.env.MONGO_URI)
//.then(() => console.log("MongoDB connecté"))
//.catch((err) => console.error("Erreur MongoDB:", err));

app.use("/api/users", userRoutes);

app.post('/test', (req, res) => {
  res.json({ message: "La route POST fonctionne !" });
});


app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});

const ingredientRoutes = require("./routes/ingredientRoutes");
app.use("/api/ingredients", ingredientRoutes);

const rhumRoutes = require("./routes/rhumRoutes");
app.use("/api/rhums", rhumRoutes);

const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);
