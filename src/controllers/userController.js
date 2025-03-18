const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, password, address } = req.body;

        if (await User.findOne({ email })) {
            return res.status(400).json({ message: "Email déjà utilisé" });
        }

        const user = new User({ name, email, password, address });
        await user.save();

        res.status(201).json({ message: "Utilisateur créé avec succès", user });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Identifiants invalides" });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        res.json({ token });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error });
    }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password"); // Exclut le mot de passe
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Erreur serveur", error });
  }
};
