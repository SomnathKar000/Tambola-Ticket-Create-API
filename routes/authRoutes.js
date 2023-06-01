const {
  getUser,
  loginUser,
  createUser,
} = require("../controllers/authController");

const express = require("express");

const router = express.Router();

router.route("/").get(getUser);
router.route("/create").post(createUser);
router.route("/login").post(loginUser);

module.exports = router;
