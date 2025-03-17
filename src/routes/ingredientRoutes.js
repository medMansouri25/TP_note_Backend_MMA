const express = require("express");
const { addIngredient, getIngredients, searchIngredient } = require("../controllers/ingredientController");

const router = express.Router();

router.post("/add", addIngredient);
router.get("/list", getIngredients);
router.get("/search", searchIngredient);

module.exports = router;
