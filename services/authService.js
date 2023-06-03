const becryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const FindUser = (object) => {
  const user = User.findOne(object);
  return user;
};

const passswordEncryption = (password) => {
  const salt = becryptjs.genSaltSync(10);
  const securepassword = becryptjs.hashSync(password, salt);

  return securepassword;
};

const createUser = ({ email, password }) => {
  const user = User.create({ email, password });
  return user;
};

const generateToken = (id) => {
  const data = {
    user: {
      userId: id,
    },
  };
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);

  return token;
};

const comparePassword = async ({ email, password }) => {
  const user = await FindUser({ email });
  const compare = becryptjs.compareSync(password, user.password);
  return compare;
};

module.exports = {
  FindUser,
  generateToken,
  passswordEncryption,
  comparePassword,
  createUser,
};
