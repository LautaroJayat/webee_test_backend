const getAll = require("../../services/sensors/get-all");

const createSensor = async (req, res) => {
  try {
    const sensorsArray = await getAll();
    return res.status(200).json(sensorsArray);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while trying to retrive data.",
    });
  }
};

module.exports = createSensor;
