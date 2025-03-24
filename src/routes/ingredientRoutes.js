const express = require("express");
// Importation des fonctions du contrôleur
const { addIngredient, searchIngredient, listIngredients } = require("../controllers/ingredientController");
// Importation du middleware d'authentification
const auth = require("../middleware/authMiddleware");
// Création du routeur
const router = express.Router();

// Les différents routes pour les ingrédients
router.post("/add",auth, addIngredient);
router.get("/search",auth, searchIngredient);
router.get("/list",auth, listIngredients);

module.exports = router;
