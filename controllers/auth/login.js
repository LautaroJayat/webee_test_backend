// SERVICES
const comparePassAndMakeHash = require("../../services/auth/comparePassAndMakeHash");

// CONTROLLER
const login = async (req, res) => {
  const user = req.body;
  try {
    const JWT = await comparePassAndMakeHash(user);
    console.log("JWT!", JWT);
    if (JWT) {
      return res.status(200).json(JWT);
    } else {
      return res.status(401).json({
        message:
          "There was an error while trying to log you in. Invalid credentials.",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      message:
        "There was an error while trying to log you in. Invalid credentials.",
    });
  }
};

module.exports = login;
