const express = require("express");
const { addRecipe, getRecipes, getPublicRecipes } = require("../controllers/recipeController");

const router = express.Router();

router.post("/add", addRecipe);
router.get("/list", getRecipes);
router.get("/public", getPublicRecipes);

module.exports = router;
