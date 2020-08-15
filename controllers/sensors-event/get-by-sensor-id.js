// SERVICES
const getBySensorId = require("../../services/sensor-events/get-by-sensor-id");

// CONTROLLER
const getSensorEventBySensorID = async (req, res) => {
  const { _id } = req.params;
  try {
    const sensorEvents = await getBySensorId(_id);
    return res.status(200).json(sensorEvents);
  } catch (error) {
    return res.status(400).json({
      message: "There was an error while retriving sensor event data.",
    });
  }
};

module.exports = getSensorEventBySensorID;
