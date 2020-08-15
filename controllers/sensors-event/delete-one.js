// SERVICES
const deleteOne = require("../../services/sensor-events/delete-one");

// CONTROLLER
const deleteOneSensorEvent = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedSensorEvent = await deleteOne(_id);
    return res.status(200).json(deletedSensorEvent);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while deleting sensor.",
    });
  }
};

module.exports = deleteOneSensorEvent;
