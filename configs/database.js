const mongoose = require("mongoose");

const initDB = async (uri) => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("Db was connected on", uri);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = initDB;
