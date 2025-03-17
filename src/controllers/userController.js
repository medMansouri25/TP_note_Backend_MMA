const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Simule une base de données en mémoire
let users = [];

exports.register = async (req, res) => {
    const { name, email, password, address } = req.body;

    if (users.find(user => user.email === email)) {
        return res.status(400).json({ message: "Email déjà utilisé" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { id: users.length + 1, name, email, password: hashedPassword, address };
    users.push(newUser);

    res.status(201).json({ message: "Utilisateur créé", user: newUser });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ message: "Identifiants invalides" });
    }

    const token = jwt.sign({ userId: user.id }, "SecretKey123", { expiresIn: "7d" });
    res.json({ message: "Connexion réussie", token });
};

exports.getUsers = (req, res) => {
    res.json({ users });
};

