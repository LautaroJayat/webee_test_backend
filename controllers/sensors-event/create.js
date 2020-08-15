const createSensorEvent = async (req, res) => {
  const sensorEvent = req.body;
  return res.status(200).json(sensor);
};

module.exports = createSensorEvent;
