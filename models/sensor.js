const { Schema, model } = require("mongoose");
const sensorRef = "sensor";

const sensorSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true,
    },
  },
  active: {
    type: Boolean,
    required: true,
  },
  minValue: {
    type: Number,
    required: true,
  },
  maxValue: {
    type: Number,
    required: true,
  },
});

const sensorModel = model(sensorRef, sensorSchema);

module.exports = {
  sensorModel,
  sensorRef,
};
