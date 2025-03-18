const Ingredient = require("../models/Ingredient");

exports.addIngredient = async (req, res) => {
    try {
        const { name, type, store, price, location } = req.body;

        const newIngredient = new Ingredient({ name, type, store, price, location });
        await newIngredient.save();

        res.status(201).json({ message: "Ingrédient ajouté", ingredient: newIngredient });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.searchIngredient = async (req, res) => {
    try {
        const { name, type } = req.query;
        let filter = {};

        if (name) filter.name = new RegExp(name, "i");
        if (type) filter.type = type;

        const ingredients = await Ingredient.find(filter);
        res.json({ results: ingredients });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.listIngredients = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const ingredients = await Ingredient.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({ total: await Ingredient.countDocuments(), page: parseInt(page), ingredients });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
