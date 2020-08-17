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
const app = require("../../app");
const { userModel } = require("../../models/users");

// TEST SUITE
describe("POST /auth", () => {
  // Mocha hooks
  before(async () => {
    await initDB(process.env.DB);
    await userModel.deleteMany({});
  });
  after(async () => {
    await userModel.deleteMany({});
    await mongoose.connection.close((err) => {
      if (err) {
        console.error("there was an error while closing DB connection", err);
      }
    });
  });

  const userData = {
    name: "test_user",
    password: "test_password",
  };

  // Test cases
  it("Should return 200 when saving a user when everything is OK", (done) => {
    request(app)
      .post("/users")
      .send(userData)
      .expect(200)
      .expect((res) => expect(res.body).toBeTruthy())
      .end(done);
  });

  // Test cases
  it("Should return 200 and a JWT when using previously saved user credentials", (done) => {
    request(app)
      .post("/auth")
      .send(userData)
      .expect(200)
      .expect((res) => expect(res.body).toBeTruthy())
      .end(done);
  });
});
