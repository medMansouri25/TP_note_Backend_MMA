const ingredientService = require("../services/ingredientService");

exports.addIngredient = async (req, res) => {
    try {
        const ingredient = await ingredientService.addIngredient(req.body);
        res.status(201).json({ message: "Ingrédient ajouté", ingredient });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.searchIngredient = async (req, res) => {
    try {
        const ingredients = await ingredientService.searchIngredient(req.query);
        res.json({ results: ingredients });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.listIngredients = async (req, res) => {
    try {
        const { ingredients, total, page } = await ingredientService.listIngredients(req.query.page, req.query.limit);
        res.json({ total, page, ingredients });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};