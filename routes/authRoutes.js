const { loginUser } = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.route("/login").post(loginUser);

module.exports = router;
