const generateUniqueTicket = require("../utils/uniqueTicket");
const customError = require("../error/customError");
const { findTickets } = require("../services/ticketService");

const createTicket = (req, res) => {
  generateUniqueTicket();
  res.status(200).json({
    success: true,
    message: "Token created",
  });
};

const findTokenById = async (req, res) => {
  const tickets = await findTickets(req.user);
  res
    .status(200)
    .json({ success: true, message: "Token found by Id", tickets });
};

module.exports = { createTicket, findTokenById };
