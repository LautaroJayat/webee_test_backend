const path = require("path");
const dotenv = require("dotenv");
const fs = require("fs");

module.exports = () => {
  if (!process.env.ENV_FILE) {
    return false;
  }

  const envpath = path.resolve(process.cwd(), process.env.ENV_FILE);

  if (!fs.existsSync(envpath)) {
    console.error("Could not find .env file");
    console.trace();
    return false;
  }
  return dotenv.config({
    path: envpath,
  });
};
