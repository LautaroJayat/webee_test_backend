// SERVICES
const createOneSensor = require("../../services/sensors/create");

// CONTROLLER
const createSensor = async (req, res) => {
  const sensor = req.body;
  try {
    const newSensor = await createOneSensor(sensor);
    return res.status(200).json(newSensor);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message:
        "There was an error while saving sensor data, probably is because duplicated key.",
    });
  }
};

module.exports = createSensor;
