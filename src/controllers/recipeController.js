const Recipe = require("../models/Recipe");

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

exports.getPublicRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({ isPublic: true });
        res.json({ results: recipes });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

