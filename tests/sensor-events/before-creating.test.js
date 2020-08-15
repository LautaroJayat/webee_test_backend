// LOADING ENVIROMENT VARIABLES
if (!process.env.DB) {
  const loadEnvs = require("../../configs/load-envs");
  const result = loadEnvs();

  // Exiting if no .env
  if (!result) {
    console.error(
      "Could Not load enviroment variables, please check if .env exists or if npm scripts exports correct ENV_FILE variable"
    );
    process.exit(1);
  }
}

// IMPORTING DEPENDENCIES
const mongoose = require("mongoose");
const request = require("supertest");
const { simpleJWTSign } = require("../../configs/encryption");
const initDB = require("../../configs/database");
const app = require("../../app");

// TEST SUITE
describe("POST /sensor-events/:_id", () => {
  // Mocha hooks
  before(async () => {
    await initDB(process.env.DB);
  });
  after(async () => {
    await mongoose.connection.close((err) => {
      if (err) {
        console.error("there was an error while closing DB connection", err);
      }
    });
  });

  // Test cases
  it("Should return 404 if _id doesnt match sensor", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensor-events/507f1f77bcf86cd799439011")
        .set("Authorization", JWT)
        .expect(404, { message: "Could not find associated sensor" })
        .end(done);
    });
  });

  it("Should return 400 if cant cast param to object ID", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensor-events/123456")
        .set("Authorization", JWT)
        .expect(400, { message: "Something went bad with your request." })
        .end(done);
    });
  });
});
