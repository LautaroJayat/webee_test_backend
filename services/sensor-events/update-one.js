const { sensorEventModel } = require("../../models/sensor-event");

const updateOneSensorEvent = async (_id, doc) => {
  try {
    const sensorEvent = await sensorEventModel.findOne({ _id });
    Object.assign(sensorEvent, doc);
    await sensorEvent.save();
    return sensorEvent;
  } catch (error) {
    throw error;
  }
};

module.exports = updateOneSensorEvent;
