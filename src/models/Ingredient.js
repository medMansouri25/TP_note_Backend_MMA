// src/models/Ingredient.js
const mongoose = require('mongoose');

// Définir le schéma de l'ingrédient
const ingredientSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true, // Le nom est requis
  },
  type: {
    type: String,
    enum: ['fruits', 'épices', 'sucres', 'autres'], // Type limité à ces valeurs
    required: true, // Le type est requis
  },
  adresseMagasin: {
    type: String,
    required: true, // L'adresse du magasin est requise
  },
  prix: {
    type: Number,
    required: true, // Le prix est requis
  },
  // Autres champs que tu pourrais vouloir ajouter
  description: {
    type: String,
    default: '', // Optionnel, une description de l'ingrédient
  },
});

module.exports = ingredient;

// Créer un modèle à partir du schéma
const ingredient = mongoose.model('Ingredient', ingredientSchema);


