const express = require("express");
const { register, login, getUsers } = require("../controllers/userController");

const router = express.Router();
router.post("/register", register);
router.post("/login", login);
router.get("/liste", getUsers);

module.exports = router;
