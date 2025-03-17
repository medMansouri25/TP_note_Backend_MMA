// Simule une base de données en mémoire
let ingredients = [];

exports.addIngredient = (req, res) => {
    const { name, type, store, price } = req.body;

    // Vérification des champs obligatoires
    if (!name || !type || !store || !price) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires" });
    }

    // Création de l'ingrédient
    const newIngredient = {
        id: ingredients.length + 1,
        name,
        type,
        store,
        price
    };

    ingredients.push(newIngredient);

    res.status(201).json({
        message: "Ingrédient ajouté avec succès",
        ingredient: newIngredient
    });
};

exports.getIngredients = (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    res.json({
        total: ingredients.length,
        page: parseInt(page),
        limit: parseInt(limit),
        ingredients: ingredients.slice(startIndex, endIndex)
    });
};

exports.searchIngredient = (req, res) => {
    const { name, type } = req.query;

    let filteredIngredients = ingredients;

    if (name) {
        filteredIngredients = filteredIngredients.filter(ingredient =>
            ingredient.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    if (type) {
        filteredIngredients = filteredIngredients.filter(ingredient =>
            ingredient.type.toLowerCase() === type.toLowerCase()
        );
    }

    res.json({ results: filteredIngredients });
};
