const express = require("express");
const { addIngredient, searchIngredient, listIngredients } = require("../controllers/ingredientController");

const auth = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/add",auth, addIngredient);
router.get("/search",auth, searchIngredient);
router.get("/list",auth, listIngredients);

module.exports = router;
