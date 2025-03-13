// src/routes/ingredientRoutes.js
const express = require('express');
const router = express.Router();
const Ingredient = require('../models/ingredient');

// Route pour ajouter un ingrédient
router.post('/add', async (req, res) => {
  try {
    const { nom, type, adresseMagasin, prix, description } = req.body;

    // Créer un nouvel ingrédient
    const newIngredient = new Ingredient({
      nom,
      type,
      adresseMagasin,
      prix,
      description,
    });

    // Sauvegarder l'ingrédient dans la base de données
    await newIngredient.save();

    res.status(201).json({
      message: 'Ingrédient ajouté avec succès',
      ingredient: newIngredient,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur lors de l\'ajout de l\'ingrédient' });
  }
});

module.exports = router;
