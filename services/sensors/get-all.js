const { sensorModel } = require("../../models/sensor");

const findAll = async () => {
  try {
    const sensors = await sensorModel.find();
    return sensors;
  } catch (error) {
    throw error;
  }
};

module.exports = findAll;
