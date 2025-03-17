let rhums = [];

exports.addRhum = (req, res) => {
    const { name, type, region, alcohol, description } = req.body;

    if (!name || !type || !region || !alcohol) {
        return res.status(400).json({ message: "Tous les champs sont obligatoires" });
    }

    const newRhum = { id: rhums.length + 1, name, type, region, alcohol, description };
    rhums.push(newRhum);

    res.status(201).json({ message: "Rhum ajouté", rhum: newRhum });
};

exports.getRhums = (req, res) => {
    const { page = 1, limit = 5 } = req.query;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);

    res.json({
        total: rhums.length,
        page: parseInt(page),
        limit: parseInt(limit),
        rhums: rhums.slice(startIndex, endIndex)
    });
};

exports.searchRhum = (req, res) => {
    const { name, type, region } = req.query;

    let results = rhums.filter(r =>
        (name ? r.name.toLowerCase().includes(name.toLowerCase()) : true) &&
        (type ? r.type.toLowerCase() === type.toLowerCase() : true) &&
        (region ? r.region.toLowerCase().includes(region.toLowerCase()) : true)
    );

    res.json({ results });
};
