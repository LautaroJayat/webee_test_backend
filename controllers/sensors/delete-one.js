// SERVICES
const deleteOne = require("../../services/sensors/delete-one");

// CONTROLLER
const deleteOneSensor = async (req, res) => {
  const { _id } = req.params;
  try {
    const deletedSensor = await deleteOne(_id);
    return res.status(200).json(deletedSensor);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while deleting sensor.",
    });
  }
};

module.exports = deleteOneSensor;
