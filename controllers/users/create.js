// SERVICES
const createUser = require("../../services/users/create");

// CONTROLLER
const createOneUser = async (req, res) => {
  const user = req.body;
  try {
    const newuser = await createUser(user);
    return res.status(200).json(newuser);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while saving user data.",
    });
  }
};

module.exports = createOneUser;
