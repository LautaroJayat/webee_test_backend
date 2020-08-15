// SERVICES
const createOne = require("../../services/sensor-events/create");

// CONTROLLER
const createSensorEvent = async (req, res) => {
  const sensorEvent = req.body;
  try {
    const newSensorEvent = await createOne(sensorEvent);
    return res.status(200).json(newSensorEvent);
  } catch (error) {
    return res.status(400).json({
      message: "There was an error while saving sensor event data.",
    });
  }
};

module.exports = createSensorEvent;
