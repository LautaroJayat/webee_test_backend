const jwt = require("jsonwebtoken");

const simpleVerification = async (token) => {
  return jwt.verify(token, process.env.DB);
};

const simpleJWTSign = async (payload) => {
  const JWT = await jwt.sign(payload, process.env.DB);
  return JWT;
};

module.exports = {
  simpleJWTSign,
  simpleVerification,
};
