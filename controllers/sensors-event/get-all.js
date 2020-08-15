// SERVICES
const getAll = require("../../services/sensor-events/get-all");

// CONTROLLER
const getAllSensorEvents = async (req, res) => {
  try {
    const allSensorEvents = await getAll();
    return res.status(200).json(allSensorEvents);
  } catch (error) {
    return res.status(400).json({
      message: "There was an error while retriving event sensor data.",
    });
  }
};

module.exports = getAllSensorEvents;
