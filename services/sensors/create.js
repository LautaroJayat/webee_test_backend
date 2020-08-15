const { sensorModel } = require("../../models/sensor");

const createSensor = async (model) => {
  const sensor = new sensorModel(model);
  try {
    await sensor.save();
    return sensor;
  } catch (error) {
    throw error;
  }
};

module.exports = createSensor;
