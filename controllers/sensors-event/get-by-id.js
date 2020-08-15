// SERVICES
const getById = require("../../services/sensor-events/get-by-ID");

// CONTROLLER
const getSensorEventByID = async (req, res) => {
  const { _id } = req.params;
  try {
    const sensorEvent = await getById(_id);
    return res.status(200).json(sensorEvent);
  } catch (error) {
    return res.status(400).json({
      message: "There was an error while retriving sensor event data.",
    });
  }
};

module.exports = getSensorEventByID;
