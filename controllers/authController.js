const {
  FindUser,
  generateToken,
  passswordEncryption,
  comparePassword,
  createUser,
} = require("../services/authService");
const customError = require("../error/customError");
const validator = require("email-validator");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new customError("Enter valid credentials", 404);
  }

  if (!validator.validate(email)) {
    throw new customError("Invalid email address", 400);
  }
  if (password.length < 6) {
    throw new customError("Password must have 6 characters", 404);
  }

  let user = await FindUser({ email });

  if (user) {
    const compare = await comparePassword({ email, password });
    if (compare) {
      const token = generateToken(user.id);
      return res
        .status(200)
        .json({ success: true, message: "Login successful ", token });
    }
    throw new customError("Enter valid password", 400);
  }
  const securepassword = passswordEncryption(password);
  user = await createUser({ email, password: securepassword });
  const token = generateToken(user.id);

  return res
    .status(200)
    .json({ success: true, message: "Login successful ", token });
};

module.exports = { loginUser };
