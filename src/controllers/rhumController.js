const rhumService = require("../services/rhumService");

exports.getRhums = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const { rhums, total } = await rhumService.getRhums(page, limit);
        res.json({ total, page: parseInt(page), rhums });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.searchRhum = async (req, res) => {
    try {
        const rhums = await rhumService.searchRhums(req.query);
        res.json({ results: rhums });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.getAllRhums = async (req, res) => {
    try {
        const { rhums } = await rhumService.getRhums(1, 10000); // ou ajouter une méthode getAllRhums dans le service
        res.json(rhums);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};
