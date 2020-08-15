const { sensorEventModel } = require("../../models/sensor-event");

const findSensorEventByID = async (_id) => {
  try {
    const sensorEvent = await sensorEventModel.findById(_id);
    return sensorEvent;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findSensorEventByID;
