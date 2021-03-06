const { sensorEventModel } = require("../../models/sensor-event");

const findSensorEventBySensorID = async (_id) => {
  try {
    const sensorEvent = await sensorEventModel
      .find({ sensorId: _id })
      .sort({ createat: -1 });
    return sensorEvent;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findSensorEventBySensorID;
