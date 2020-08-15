// SERVICES
const getById = require("../../services/sensors/get-by-id");

// CONTROLLER
const getSensorById = async (req, res) => {
  const { _id } = req.params;
  try {
    const sensor = await getById(_id);
    return res.status(200).json(sensor);
  } catch (error) {
    //console.error(error);
    return res.status(400).json({
      message: "There was an error while trying to retrive data.",
    });
  }
};

module.exports = getSensorById;
