const createTicket = (req, res) => {
  res.status(200).json({ success: true, message: "Token created" });
};

const findTokenById = (req, res) => {
  res.status(200).json({ success: true, message: "Token found by Id" });
};

module.exports = { createTicket, findTokenById };
