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
const expect = require("expect");
const initDB = require("../../configs/database");
const { simpleJWTSign } = require("../../configs/encryption");
const app = require("../../app");
const { sensorModel } = require("../../models/sensor");
const { sensorEventModel } = require("../../models/sensor-event");

// TEST SUITE
describe("GET /sensor-events/by-sensor/:_id", () => {
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
  it("Should return 200 and an array of 2 sensorEvents when everything is OK", (done) => {
    const sensor = new sensorModel({
      name: "Test Sensor",
      location: { latitude: 92.123, longitude: 12.699 },
      minValue: 90,
      maxValue: 60,
    });
    sensor.save().then((s) => {
      const sensorEvent1 = new sensorEventModel({
        sensorId: s._id,
        value: 1,
      });
      sensorEvent1.save().then((se) => {
        console.log("seeded with one sensor event");
      });
      const sensorEvent2 = new sensorEventModel({
        sensorId: s._id,
        value: 6,
      });
      sensorEvent2.save().then((se) => {
        console.log("seeded with two sensor event");
      });
      simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
        request(app)
          .get(`/sensor-events/by-sensor/${s._id}`)
          .set("Authorization", JWT)
          .expect(200)
          .expect((res) => {
            expect(res.body).toHaveLength(2);
          })
          .end(done);
      });
    });
  });
});
