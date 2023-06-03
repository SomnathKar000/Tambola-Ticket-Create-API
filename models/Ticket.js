const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  ticket: {
    type: String,
    require: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Ticket", ticketSchema);
