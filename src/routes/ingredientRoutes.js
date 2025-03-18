const express = require("express");
const { addIngredient, searchIngredient, listIngredients } = require("../controllers/ingredientController");

const router = express.Router();

router.post("/add", addIngredient);
router.get("/search", searchIngredient);
router.get("/list", listIngredients);

module.exports = router;
