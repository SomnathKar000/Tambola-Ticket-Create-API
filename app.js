require("dotenv").config();
require("express-async-errors");
const authRoute = require("./routes/authRoutes");
const ticketRoute = require("./routes/ticketRoutes");
const authenticationMiddleware = require("./middlewares/authentication");
const errorHandler = require("./middlewares/errorHandler");
const notFoundHandler = require("./middlewares/notFound");
const connectDB = require("./config/database");

const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());

app.use("/api/v1/user", authRoute);
app.use(authenticationMiddleware);
app.use("/api/v1/ticket", ticketRoute);

app.use(errorHandler);
app.use(notFoundHandler);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(port, () => console.log(`Server is listening on ${port}...`));
  } catch (error) {
    console.log("Failed to connect to the database", error);
    process.exit(1);
  }
};
start();
