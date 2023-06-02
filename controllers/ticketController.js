const generateUniqueTicket = require("../utils/uniqueTicket");

const createTicket = (req, res) => {
  generateUniqueTicket();
  res.status(200).json({
    success: true,
    message: "Token created",
  });
};

const findTokenById = (req, res) => {
  res.status(200).json({ success: true, message: "Token found by Id" });
};

module.exports = { createTicket, findTokenById };
