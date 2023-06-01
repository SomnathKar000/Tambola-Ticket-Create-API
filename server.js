require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();

const port = 5000 || process.env.PORT;

app.use(express.json());

const start = () => {
  app.listen(port, () => console.log(`Server is listening on ${port}...`));
};
start();
