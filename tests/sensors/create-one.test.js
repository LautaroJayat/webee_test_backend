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
const mongoose = require("mongoose");
const request = require("supertest");
const initDB = require("../../configs/database");
const app = require("../../app");
const { sensorModel } = require("../../models/sensor");

describe("POST /sensors", () => {
  before(async () => {
    await initDB(process.env.DB);
    await sensorModel.deleteMany({});
  });
  after(
    async () =>
      await mongoose.connection.close((err) => {
        if (err) {
          console.error("there was an error while closing DB connection", err);
        }
      })
  );
  it("Should return 200 and a Sensor when everything is OK", (done) => {
    request(app)
      .post("/sensors")
      .send({
        name: "Test Sensor",
        location: { latitude: 92.123, longitude: 12.699 },
        minValue: 90,
        maxValue: 60,
      })
      .expect(200)
      .end(done);
  });
  it("Should return 400 when trying to save duplicated sensor", (done) => {
    request(app)
      .post("/sensors")
      .send({
        name: "Test Sensor",
        location: { latitude: 92.123, longitude: 12.699 },
        minValue: 90,
        maxValue: 60,
      })
      .expect(400, {
        message:
          "There was an error while saving sensor data, probably is because duplicated key.",
      })
      .end(done);
  });
});
