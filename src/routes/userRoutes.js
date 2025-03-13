const express = require("express");
const { register, login } = require("../controllers/userController");

const router = express.Router();
module.exports = router;

router.post("/register", register);
router.post("/login", login);

// Exemple de route GET pour récupérer tous les utilisateurs (test)
router.get('/liste', (req, res) => {
    res.json({ message: "Liste des utilisateurs" });
});
