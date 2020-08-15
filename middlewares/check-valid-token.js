const { simpleJWTSign } = require("../configs/encryption");
const checkValidCredentials = (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Need authorization for this operation" });
  }

  const valid = simpleJWTSign(token);
  if (!valid) {
    return res
      .status(401)
      .json({ message: "Need authorization for this operation" });
  }
  return next();
};

module.exports = checkValidCredentials;
