const express = require("express");
// Importation des fonctions du contrôleur
const {
    addRecipe,
    getRecipes,
    getPublicRecipes,
    updateRecipe,
    getPrivateRecipes 
} = require("../controllers/recipeController"); 
// Importation du middleware d'authentification
const auth = require("../middleware/authMiddleware");
// Création du routeur
const router = express.Router();
// Les différentes routes pour les recettes
router.post("/add", auth, addRecipe); 
router.get("/list", auth, getRecipes);
router.get("/private", auth, getPrivateRecipes);
router.get("/public",auth, getPublicRecipes);
router.put("/update/:id", auth, updateRecipe); 

module.exports = router;

