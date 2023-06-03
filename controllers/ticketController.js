const generateUniqueTicket = require("../utils/uniqueTicket");
const customError = require("../error/customError");
const { findTickets, createTicketDB } = require("../services/ticketService");

const createTicket = async (req, res) => {
  try {
    const ticket = await generateUniqueTicket();
    console.log(ticket);
    const data = await createTicketDB({ ticket, userId: req.user.userId });
    res.status(200).json({
      success: true,
      message: "Token created",
      ticket,
    });
  } catch (error) {
    console.log(error);
  }
};

const findTokenById = async (req, res) => {
  const tickets = await findTickets(req.user);
  res
    .status(200)
    .json({ success: true, message: "Token found by Id", tickets });
};

module.exports = { createTicket, findTokenById };
