const express = require("express");
// Importation des fonctions du contrôleur
const { getRhums, searchRhum, getAllRhums } = require("../controllers/rhumController");
// Importation du middleware d'authentification
const auth = require("../middleware/authMiddleware");
// Création du routeur
const router = express.Router();
// Les différentes routes pour les rhums
router.get("/search",auth, searchRhum);
router.get("/list", auth, getRhums);
router.get("/all",auth, getAllRhums);
module.exports = router;
