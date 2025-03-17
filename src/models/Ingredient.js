const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, enum: ["fruits", "épices", "sucres", "autres"], required: true },
  store: { type: String, required: true },
  price: { type: Number, required: true }
});

module.exports = mongoose.model("Ingredient", ingredientSchema);
