const Rhum = require("../models/Rhum");

exports.getRhums = async (page = 1, limit = 10) => {
    const rhums = await Rhum.find()
        .skip((page - 1) * limit)
        .limit(parseInt(limit));
    const total = await Rhum.countDocuments();
    return { rhums, total };
};

exports.searchRhums = async ({ name, type, region }) => {
    let filter = {};
    if (name) filter.name = new RegExp(name, "i");
    if (type) filter.type = type;
    if (region) filter.region = region;
    return await Rhum.find(filter);
};
