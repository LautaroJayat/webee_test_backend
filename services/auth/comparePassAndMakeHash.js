const { userModel } = require("../../models/users");
const { checkPass, simpleJWTSign } = require("../../configs/encryption");

const comparePassAndMakeHash = async (data) => {
  try {
    const user = await userModel.findOne({ name: data.name });
    const isOk = await checkPass(data.password, user.password);
    if (isOk) {
      return await simpleJWTSign({ payload: "Sample payload" });
    } else {
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = comparePassAndMakeHash;
