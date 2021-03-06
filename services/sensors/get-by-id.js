const { sensorModel } = require("../../models/sensor");

const findSensorById = async (_id) => {
  try {
    const sensor = await sensorModel.findOne({ _id });
    return sensor;
  } catch (error) {
    throw error;
  }
};

module.exports = findSensorById;
