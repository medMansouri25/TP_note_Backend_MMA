const express = require("express");
const { addRhum, getRhums, searchRhum } = require("../controllers/rhumController");

const router = express.Router();

router.post("/add", addRhum);  // Assure-toi que cette ligne est bien là
router.get("/list", getRhums);
router.get("/search", searchRhum);

module.exports = router;
