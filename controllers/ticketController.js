const generateUniqueTicket = require("../utils/uniqueTicket");
const customError = require("../error/customError");
const {
  findTickets,
  createTicketDB,
  ConvertIntoTicketArray,
} = require("../services/ticketService");

const createTicket = async (req, res) => {
  try {
    const ticket = await generateUniqueTicket();
    await createTicketDB({ ticket, userId: req.user.userId });
    res.status(200).json({
      success: true,
      message: "Ticket created",
      ticket,
    });
  } catch (error) {
    throw new customError(error.message, 400);
  }
};

const findTokenById = async (req, res) => {
  try {
    const data = await findTickets(req.user);
    const tickets = data.length > 0 ? ConvertIntoTicketArray(data) : [];
    res
      .status(200)
      .json({ success: true, message: "Token found by Id", tickets });
  } catch (error) {
    throw new customError(error.message, 400);
  }
};

module.exports = { createTicket, findTokenById };
