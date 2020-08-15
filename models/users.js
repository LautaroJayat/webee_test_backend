const { Schema, model } = require("mongoose");
const userRef = "user";

const userSchema = new Schema({
  name: { type: String, minlength: 5, maxlength: 20 },
  password: { type: String },
});

const userModel = model(userRef, userSchema);

module.exports = {
  userModel,
  userRef,
};
