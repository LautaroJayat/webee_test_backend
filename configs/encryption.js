const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const simpleVerification = (token) => {
  try {
    const result = jwt.verify(token, process.env.DB);
    return result;
  } catch (error) {
    return false;
  }
};

const simpleJWTSign = async (payload) => {
  try {
    const JWT = await jwt.sign(payload, process.env.DB);
    return JWT;
  } catch (error) {
    return false;
  }
};

const hashPassword = async (pass) => {
  const hashed = await bcrypt.hash(pass, 10);
  return hashed;
};

const checkPass = async (pass, hash) => {
  const result = await bcrypt.compare(pass, hash);
  return result;
};

module.exports = {
  simpleJWTSign,
  simpleVerification,
  hashPassword,
  checkPass,
};
