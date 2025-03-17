let recipes = [];

exports.addRecipe = (req, res) => {
    const { name, rhum, ingredients, instructions, isPublic } = req.body;

    if (!name || !rhum || !ingredients.length || !instructions) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires" });
    }

    const newRecipe = { id: recipes.length + 1, name, rhum, ingredients, instructions, isPublic };
    recipes.push(newRecipe);

    res.status(201).json({ message: "Recette ajoutée", recipe: newRecipe });
};

exports.getRecipes = (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    res.json({
        total: recipes.length,
        page: parseInt(page),
        limit: parseInt(limit),
        recipes: recipes.slice(startIndex, endIndex)
    });
};

exports.getPublicRecipes = (req, res) => {
    res.json({ results: recipes.filter(r => r.isPublic) });
};
