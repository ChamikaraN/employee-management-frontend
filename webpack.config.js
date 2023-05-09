const Dotenv = require("dotenv-webpack");

module.exports = {
  // ... other configuration options ...
  plugins: [
    // Load environment variables from a .env file
    new Dotenv(),
  ],
};
