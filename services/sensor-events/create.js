const { sensorEventModel } = require("../../models/sensor-event");

const createSensorEvent = async (model) => {
  const sensorEvent = new sensorEventModel(model);
  try {
    await sensorEvent.save();
    return sensorEvent;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = createSensorEvent;
