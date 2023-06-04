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

const ConvertIntoTicketArray = (array) => {
  let result = [];
  array.forEach(({ ticket }) => result.push(ticket));
  return result;
};

module.exports = { findTickets, createTicketDB, ConvertIntoTicketArray };
