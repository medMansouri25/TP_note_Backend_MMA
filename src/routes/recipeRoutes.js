const express = require("express");
const {
    addRecipe,
    getRecipes,
    getPublicRecipes,
    updateRecipe,
    getPrivateRecipes
} = require("../controllers/recipeController"); 

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/add", auth, addRecipe); 
router.get("/list", auth, getRecipes);
router.get("/private", auth, getPrivateRecipes);  
router.get("/public",auth, getPublicRecipes);
router.put("/update/:id", auth, updateRecipe); 

module.exports = router;

