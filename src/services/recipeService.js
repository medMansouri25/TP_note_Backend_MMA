const Recipe = require("../models/Recipe");

exports.addRecipe = async (data) => {
    const recipe = new Recipe(data);
    return await recipe.save();
};

exports.getRecipes = async (page = 1, limit = 10) => {
    const recipes = await Recipe.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    const total = await Recipe.countDocuments();
    return { recipes, total, page };
};

exports.getPublicRecipes = async () => {
    return await Recipe.find({ isPublic: true });
};

exports.getUserRecipes = async (userId) => {
    return await Recipe.find({ userId });
};
exports.updateRecipe = async (id, updates) => {
    return await Recipe.findByIdAndUpdate(id, updates, { new: true });
};
