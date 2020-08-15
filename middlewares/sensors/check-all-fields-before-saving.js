const createSensor = async (req, res, next) => {
  const sensor = req.body;
  if (!sensor.name) {
    return res
      .status(400)
      .json({ message: "There is a missing Name for the sensor" });
  }
  if (!sensor.location) {
    return res
      .status(400)
      .json({ message: "There is a missing Location for the sensor" });
  }
  if (!sensor.minValue) {
    return res
      .status(400)
      .json({ message: "There is a missing minValue for the sensor" });
  }
  if (!sensor.maxValue) {
    return res
      .status(400)
      .json({ message: "There is a missing maxValue for the sensor" });
  }
  return next();
};

module.exports = createSensor;
