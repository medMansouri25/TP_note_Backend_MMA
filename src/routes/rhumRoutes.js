const express = require("express");
const { getRhums, searchRhum, getAllRhums } = require("../controllers/rhumController");

const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/search",auth, searchRhum);
router.get("/list", auth, getRhums);
router.get("/all",auth, getAllRhums);


module.exports = router;
