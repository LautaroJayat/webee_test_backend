// LOADING ENVIROMENT VARIABLES
if (!process.env.DB) {
  const loadEnvs = require("../../configs/load-envs");
  const result = loadEnvs();

  // Exiting if no .env
  if (!result) {
    console.error(
      "Could Not load enviroment variables, please check if .env exists or if npm scripts exports correct ENV_FILE variable"
    );
    return process.exit(1);
  }
}

// IMPORTING DEPENDENCIES
const mongoose = require("mongoose");
const request = require("supertest");
const initDB = require("../../configs/database");
const { simpleJWTSign } = require("../../configs/encryption");
const app = require("../../app");
const { sensorModel } = require("../../models/sensor");
const { sensorEventModel } = require("../../models/sensor-event");

// TEST SUITE
describe("GET /sensor-events/:_id", () => {
  // Mocha hooks
  before(async () => {
    await initDB(process.env.DB);
    await sensorModel.deleteMany({});
    await sensorEventModel.deleteMany({});
  });
  after(async () => {
    await sensorModel.deleteMany({});
    await sensorEventModel.deleteMany({});
    await mongoose.connection.close((err) => {
      if (err) {
        console.error("there was an error while closing DB connection", err);
      }
    });
  });

  // Test cases
  it("Should return 200 and a sensorEvent when everything is OK", (done) => {
    const sensor = new sensorModel({
      name: "Test Sensor",
      location: { latitude: 92.123, longitude: 12.699 },
      minValue: 90,
      maxValue: 60,
    });
    sensor.save().then((s) => {
      const sensorEvent = new sensorEventModel({
        sensorId: s._id,
        value: 1,
      });
      sensorEvent.save().then((se) => {
        simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
          request(app)
            .delete(`/sensor-events/${se._id}`)
            .set("Authorization", JWT)
            .expect(200)
            .end(done);
        });
      });
    });
  });
});
