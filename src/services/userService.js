const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.registerUser = async ({ name, email, password, address }) => {
    if (await User.findOne({ email })) {
        throw new Error("Email déjà utilisé");
    }
    const user = new User({ name, email, password, address });
    await user.save();
    return user;
};

exports.loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
        throw new Error("Identifiants invalides");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
    return { token };
};
