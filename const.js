const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

module.exports = {
    PORT,
    PRIVATE_KEY,
    NODE_ENV,
    JWT_EXPIRES_IN,
  };