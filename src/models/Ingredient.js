const mongoose = require("mongoose");

const ingredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["fruits", "épices", "sucres", "autres"], required: true },
    store: { type: String, required: true },
    price: { type: Number, required: true },
    location: { 
        lat: { type: Number, required: true },
        lon: { type: Number, required: true }
    }
}, { collection: "mma-ingredients" }); 

module.exports = mongoose.model("Ingredient", ingredientSchema);


