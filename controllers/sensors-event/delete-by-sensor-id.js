// SERVICES
const deleteBySensorId = require("../../services/sensor-events/delete-by-sensor-id");

// CONTROLLER
const deleteOneSensorEvent = async (req, res) => {
  const { _id } = req.params;
  console.log(_id);
  try {
    const deletedSensorEvent = await deleteBySensorId(_id);
    return res.status(200).json(deletedSensorEvent);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while deleting sensor.",
    });
  }
};

module.exports = deleteOneSensorEvent;
