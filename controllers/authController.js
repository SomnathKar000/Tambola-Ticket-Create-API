const getUser = (req, res) => {
  res.status(200).json({ success: true, message: "Get user data" });
};

const loginUser = (req, res) => {
  res.status(200).json({ success: true, message: "Login user " });
};

const createUser = (req, res) => {
  res.status(200).json({ success: true, message: "Create user " });
};

module.exports = { getUser, loginUser, createUser };
