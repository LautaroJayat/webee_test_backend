const createOneSensor = require("../../services/sensors/create");

const createSensor = async (req, res) => {
  const sensor = req.body;
  try {
    const newSensor = await createOneSensor(sensor);
    return res.status(200).json(newSensor);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "There was an error while saving sensor data." });
  }
};

module.exports = createSensor;
