const jwt = require("jsonwebtoken");
const Ticket = require("../models/Ticket");

const findTickets = (object) => {
  const tickets = Ticket.find(object);
  return tickets;
};

const createTicketDB = (object) => {
  const ticket = Ticket.create(object);
  return ticket;
};

module.exports = { findTickets, createTicketDB };
