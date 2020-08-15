const { sensorModel } = require("../../models/sensor");

const deleteOneSensor = async (_id) => {
  try {
    const sensor = await sensorModel.findOneAndDelete({ _id });
    return sensor;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteOneSensor;
