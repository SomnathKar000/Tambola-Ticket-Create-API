const {
  createTicket,
  findTokenById,
} = require("../controllers/ticketController");

const express = require("express");

const router = express.Router();

router.route("/create").post(createTicket);
router.route("/").get(findTokenById);

module.exports = router;
