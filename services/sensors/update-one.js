const { sensorModel } = require("../../models/sensor");

const updateOneSensor = async (_id, doc) => {
  try {
    const sensor = await sensorModel.findOne({ _id });
    Object.assign(sensor, doc);
    await sensor.save();
    return sensor;
  } catch (error) {
    throw error;
  }
};

module.exports = updateOneSensor;
