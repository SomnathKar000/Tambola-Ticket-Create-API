const jwt = require("jsonwebtoken");
const Ticket = require("../models/Ticket");

const findTickets = (object) => {
  const tickets = Ticket.find(object);
  return tickets;
};

module.exports = { findTickets };
