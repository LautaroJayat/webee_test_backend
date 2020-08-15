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

// TEST SUITE
describe("Get /sensors/:_id", () => {
  // Mocha hooks
  before(async () => {
    await initDB(process.env.DB);
    await sensorModel.deleteMany({});
  });
  after(async () => {
    await sensorModel.deleteMany({});
    await mongoose.connection.close((err) => {
      if (err) {
        console.error("there was an error while closing DB connection", err);
      }
    });
  });

  // Test cases
  it("Should return 200 and a Sensor when everything is OK", function (done) {
    this.timeout(5000);
    const sensor = new sensorModel({
      name: "Test Sensor",
      location: { latitude: 92.123, longitude: 12.699 },
      minValue: 90,
      maxValue: 60,
    });
    sensor.save().then((s) => {
      //console.log(s);
      simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
        request(app)
          .get(`/sensors/${s._id}`)
          .set("Authorization", JWT)
          .send()
          .expect(200)
          .end(done);
      });
    });
  });
});
