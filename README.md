# TP_note_Backend_MMA

--Séance 1
Lancement de serveur.
Installation de MONGODB.
Pour lancement de serveur : H:\Home\Documents\3A\mongodb-windows-x86_64-8.0.5\mongodb-win32-x86_64-windows-8.0.5\bin\mongod.exe --dbpath .\data 
Mongorestore : H:\Home\Documents\3A\mongodb-database-tools-windows-x86_64-100.11.0\mongodb-database-tools-windows-x86_64-100.11.0\bin\mongorestore.exe --uri="mongodb://localhost/rhums" --db=rhums H:\Home\Documents\3A\dump\rhums (Pas besoin)

--Séance 2-- MANSOURI Mohammed
Création de modéle (user) ainsi que le controlleur correspondant à mon modéle
création de controleur(userConctrolleur) pour se logger (email,mot de passe)

C:\Users\MANSOURI\OneDrive\Bureau\3A-2024-2025\mongodb-win32-x86_64-windows-8.0.5\bin\mongod.exe --dbpath .\data
C:\Users\MANSOURI\OneDrive\Bureau\3A-2024-2025\mongodb-database-tools-windows-x86_64-100.11.0\bin\mongorestore.exe --uri="mongodb://localhost/rhums" --db=rhums C:\Users\MANSOURI\OneDrive\Bureau\3A-2024-2025\dump

userController.j;
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { name, email, password, address } = req.body;

  if (await User.findOne({ email })) {
    return res.status(400).json({ message: "Email déjà utilisé" });
  }

  const user = new User({ name, email, password, address });
  await user.save();

  res.status(201).json({ message: "Utilisateur créé" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");
  if (!user || !(await user.comparePassword(password))) {
    return res.status(400).json({ message: "Identifiants incorrects" });
  }

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
};
