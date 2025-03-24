const Recipe = require("../models/Recipe");
const mongoose = require("mongoose");

// Ajouter une recette
exports.addRecipe = async (req, res) => {
    try {
        const { userId, name, rhum, ingredients, instructions, isPublic } = req.body;

        const newRecipe = new Recipe({ userId, name, rhum, ingredients, instructions, isPublic });
        await newRecipe.save();

        res.status(201).json({ message: "Recette ajoutée avec succès", recipe: newRecipe });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
// lister les recettes avec pagination depuis MongoDB
exports.getRecipes = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const recipes = await Recipe.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({ total: await Recipe.countDocuments(), page: parseInt(page), recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
// lister les recettes publiques avec pagination depuis MongoDB
exports.getPublicRecipes = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const recipes = await Recipe.find({ isPublic: true })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Recipe.countDocuments({ isPublic: true });

        res.json({ total, page: parseInt(page), recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
// lister les recettes privées avec pagination depuis MongoDB
exports.getPrivateRecipes = async (req, res) => {
    try {
        if (!req.user || !req.user.userId) {
            return res.status(401).json({ message: "Utilisateur non authentifié." });
        }

        const userId = req.user.userId;
        console.log("UserID JWT :", userId); // Pour déboguer et vérifier l'utilisateur connecté

        const { page = 1, limit = 10 } = req.query;
        const recipes = await Recipe.find({ userId, isPublic: false })
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const total = await Recipe.countDocuments({ userId, isPublic: false });

        res.json({ total, page: parseInt(page), recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "ID de recette invalide" });
        }

        const updates = req.body;
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recette non trouvée" });
        }

        res.json({ message: "Recette mise à jour avec succès", updatedRecipe });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};