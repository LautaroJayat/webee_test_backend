const jwt = require("jsonwebtoken");

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

module.exports = {
  simpleJWTSign,
  simpleVerification,
};
