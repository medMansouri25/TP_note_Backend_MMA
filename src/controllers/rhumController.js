const Rhum = require("../models/Rhum");

//  Lister les rhums avec pagination depuis MongoDB
exports.getRhums = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const rhums = await Rhum.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        res.json({ total: await Rhum.countDocuments(), page: parseInt(page), rhums });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

//  Chercher un rhum par nom, type ou région
exports.searchRhum = async (req, res) => {
    try {
        const { name, type, region } = req.query;
        let filter = {};

        if (name) filter.name = new RegExp(name, "i");
        if (type) filter.type = type;
        if (region) filter.region = region;

        const rhums = await Rhum.find(filter);
        res.json({ results: rhums });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

// Route pour récupérer tous les rhums sans pagination
exports.getAllRhums = async (req, res) => {
    try {
        const rhums = await Rhum.find(); // Récupère tous les rhums
        res.json(rhums);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

