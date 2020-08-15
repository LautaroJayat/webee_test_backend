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

// TEST SUITE
describe("Get /sensors", () => {
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
  it("Should return 200 and a 3 sensors when everything seeding 3 and retriving all is OK", function (done) {
    this.timeout(10000);
    const sensor = new sensorModel({
      name: "Test Sensor",
      location: { latitude: 92.123, longitude: 12.699 },
      minValue: 90,
      maxValue: 60,
    });
    sensor.save().then((s) => {
      console.log("seeded with one sensor");
    });
    const sensor2 = new sensorModel({
      name: "Test Sensor2",
      location: { latitude: 92.1232, longitude: 12.6929 },
      minValue: 90,
      maxValue: 60,
    });
    sensor2.save().then((s) => {
      console.log("seeded with two sensors");
    });
    const sensor3 = new sensorModel({
      name: "Test Sensor3",
      location: { latitude: 92.11223, longitude: 12.6919 },
      minValue: 90,
      maxValue: 60,
    });
    sensor3.save().then((s) => {
      console.log("seeded with 3 sensor");
    });
    //console.log(s);
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .get("/sensors")
        .set("Authorization", JWT)
        .send()
        .expect(200)
        .expect((res) => {
          expect(res.body).toHaveLength(3);
        })
        .end(done);
    });
  });
});
