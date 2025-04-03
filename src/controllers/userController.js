const userService = require("../services/userService");

exports.register = async (req, res) => {
    try {
        const user = await userService.registerUser(req.body);
        res.status(201).json({ message: "Utilisateur créé avec succès", user });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const result = await userService.loginUser(req.body);
        res.json(result);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
      const users = await User.find().select("-password");
      res.json(users);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: "Erreur serveur", error });
    }
};
  