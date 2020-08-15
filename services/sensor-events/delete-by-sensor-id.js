const { sensorEventModel } = require("../../models/sensor-event");

const deleteSensorEventBySensorId = async (_id) => {
  try {
    const sensor = await sensorEventModel.findOneAndDelete({ sensorId: _id });
    return sensor;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteSensorEventBySensorId;
