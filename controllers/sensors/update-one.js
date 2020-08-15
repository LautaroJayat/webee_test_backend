const updateOne = require("../../services/sensors/update-one");

const updateOneSensor = async (req, res) => {
  const sensor = req.body;
  const { _id } = req.params;
  try {
    const updatedSensor = await updateOne(_id, sensor);
    return res.status(200).json(updatedSensor);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while saving sensor data.",
    });
  }
};

module.exports = updateOneSensor;
