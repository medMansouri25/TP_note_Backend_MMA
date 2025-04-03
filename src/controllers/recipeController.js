const recipeService = require("../services/recipeService");
const mongoose = require("mongoose");

exports.addRecipe = async (req, res) => {
    try {
        const recipe = await recipeService.addRecipe(req.body);
        res.status(201).json({ message: "Recette ajoutée avec succès", recipe });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.getRecipes = async (req, res) => {
    try {
        const { recipes, total, page } = await recipeService.getRecipes(req.query.page, req.query.limit);
        res.json({ total, page, recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.getPublicRecipes = async (req, res) => {
    try {
        const recipes = await recipeService.getPublicRecipes();
        res.json({ recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.getPrivateRecipes = async (req, res) => {
    try {
        if (!req.user || !req.user.userId) {
            return res.status(401).json({ message: "Utilisateur non authentifié." });
        }

        const userId = req.user.userId;
        const recipes = await recipeService.getUserRecipes(userId);
        res.json({ recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedRecipe = await recipeService.updateRecipe(id, updates);

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recette non trouvée" });
        }

        res.json({ message: "Recette mise à jour avec succès", updatedRecipe });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
