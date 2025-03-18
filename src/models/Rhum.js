const mongoose = require("mongoose");

const rhumSchema = new mongoose.Schema({
    name: { type: String, required: true },
    rxid_number: { type: String, unique: true },
    pays: { type: String },
    distillerie: { type: String },
    ABV: { type: String },  // Degré d'alcool sous forme de texte
    categorie: { type: String },
    vintage: { type: String },
    fabriqueAvec: { type: String },
    distillation: { type: String },
    volume: { type: String },
    age: { type: String },
    type: { type: String },
    degree: { type: Number },  // Degré d'alcool sous forme numérique
    imagePath: { type: String },
    visible: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("rhums", rhumSchema);
