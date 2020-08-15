const updateOne = require("../../services/sensor-events/update-one");

const updateOneSensorEvent = async (req, res) => {
  const sensor = req.body;
  const { _id } = req.params;
  try {
    const updatedSensorEvent = await updateOne(_id, sensor);
    return res.status(200).json(updatedSensorEvent);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while saving sensor data.",
    });
  }
};

module.exports = updateOneSensorEvent;
