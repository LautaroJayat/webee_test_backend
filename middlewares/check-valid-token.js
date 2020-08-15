const { simpleVerification } = require("../configs/encryption");
const checkValidCredentials = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({ message: "Need authorization for this operation" });
  }
  const valid = simpleVerification(token);
  if (valid) {
    return next();
  } else {
    return res
      .status(401)
      .json({ message: "Need authorization for this operation" });
  }
};

module.exports = checkValidCredentials;
