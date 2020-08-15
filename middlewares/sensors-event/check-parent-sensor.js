const findSensorById = require("../../services/sensors/get-by-id-return-id");

const checkValidParentSensor = async (req, res, next) => {
  const { _id } = req.params;
  if (!_id || _id === "") {
    //console.log("id", _id);
    return res.status(400).json({ message: "Could not find sensor id" });
  }
  try {
    const sensor = await findSensorById(_id);
    if (sensor) {
      return next();
    }
    return res
      .status(404)
      .json({ message: "Could not find associated sensor" });
  } catch (error) {
    //console.error(error);
    return res
      .status(400)
      .json({ message: "Something went bad with your request." });
  }
};

module.exports = checkValidParentSensor;
