const { sensorEventModel } = require("../../models/sensor-event");

const findAllsensorEvents = async (_id) => {
  try {
    const sensorEvents = await sensorEventModel.find();
    return sensorEvents;
  } catch (error) {
    console.error(error);
    return false;
  }
};

module.exports = findAllsensorEvents;
