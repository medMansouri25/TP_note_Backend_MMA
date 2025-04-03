const Ingredient = require("../models/Ingredient");

exports.addIngredient = async (data) => {
    const ingredient = new Ingredient(data);
    return await ingredient.save();
};

exports.searchIngredient = async (query) => {
    const filter = {};
    if (query.name) filter.name = new RegExp(query.name, "i");
    if (query.type) filter.type = query.type;
    return await Ingredient.find(filter);
};

exports.listIngredients = async (page = 1, limit = 10) => {
    const skip = (page - 1) * limit;
    const ingredients = await Ingredient.find().skip(skip).limit(parseInt(limit));
    const total = await Ingredient.countDocuments();
    return { total, page, ingredients };
};
