const express = require("express");
const { register, login, getUsers } = require("../controllers/userController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/list", auth, getUsers);

module.exports = router;


