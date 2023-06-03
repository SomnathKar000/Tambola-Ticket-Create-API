const jwt = require("jsonwebtoken");
const customError = require("../error/customError");

const authenticationMiddleware = (req, res, next) => {
  const token = req.headers["auth-token"];
  if (!token) {
    throw new customError("Token not found", 404);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    console.log(error);
    throw new customError("Invalid token", 400);
  }
};

module.exports = authenticationMiddleware;
