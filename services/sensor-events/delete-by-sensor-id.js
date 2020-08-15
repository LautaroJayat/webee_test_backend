const { sensorEventModel } = require("../../models/sensor-event");

const deleteSensorEventBySensorId = async (_id) => {
  try {
    const sensorEventsData = await sensorEventModel.deleteMany({
      sensorId: _id,
    });
    return sensorEventsData;
  } catch (error) {
    throw error;
  }
};

module.exports = deleteSensorEventBySensorId;
