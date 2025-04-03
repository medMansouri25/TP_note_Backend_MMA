const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, //Utilisateur qui a créé la recette
    name: { type: String, required: [true, "Le nom de la recette est obligatoire"] }, //Nom obligatoire
    rhum: { type: mongoose.Schema.Types.ObjectId, ref: "Rhum", required: [true, "Un rhum est obligatoire"] }, //Un rhum est obligatoire
    ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredient", required: true }], //Minimum 1 ingrédient requis
    instructions: { type: String, required: [true, "Les instructions sont obligatoires"] }, //nstructions obligatoires
    isPublic: { type: Boolean, default: false }, //Privé/Public
    createdAt: { type: Date, default: Date.now }
}, { collection: "mma-recipes" }); 

module.exports = mongoose.model("Recipe", recipeSchema);

