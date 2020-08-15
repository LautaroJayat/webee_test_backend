const { userModel } = require("../../models/users");
const { hashPassword } = require("../../configs/encryption");

const createUser = async (model) => {
  try {
    const user = new userModel(model);
    user.password = await hashPassword(user.password);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = createUser;
