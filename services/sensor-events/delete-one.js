const { sensorEventModel } = require("../../models/sensor-event");

const deleteOneSensorEvent = async (_id) => {
  try {
    const sensorEvent = await sensorEventModel.findOneAndDelete({ _id });
    return sensorEvent;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteOneSensorEvent;
