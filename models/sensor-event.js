const { Schema, model } = require("mongoose");
const { sensorRef } = require("./sensor");

const sensorEventRef = "sensorEvent";

const sensorEventSchema = new Schema(
  {
    sensorId: {
      type: Schema.Types.ObjectId,
      ref: sensorRef,
      required: true,
    },
    value: {
      type: Number,
    },
  },
  {
    timestamps: { createdAt: "createat" },
  }
);
const sensorEventModel = model(sensorEventRef, sensorEventSchema);

module.exports = { sensorEventModel, sensorEventRef };
