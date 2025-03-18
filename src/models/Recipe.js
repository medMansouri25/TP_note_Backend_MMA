const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, 
    name: { type: String, required: true },
    rhum: { type: mongoose.Schema.Types.ObjectId, ref: "Rhum", required: true }, 
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true }], 
    instructions: { type: String, required: true },
    isPublic: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
}, { collection: "mma-recipes" });

module.exports = mongoose.model("Recipe", recipeSchema);
