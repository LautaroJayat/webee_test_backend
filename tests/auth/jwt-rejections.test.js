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
const request = require("supertest");
const app = require("../../app");

// TEST SUITE
describe("JWT checks for secure routes proof of concept", () => {
  // Test cases
  it("Should return 400 if no Authorization header in a secured route", (done) => {
    request(app)
      .post("/sensor-events/507f1f77bcf86cd799439011")
      .expect(401, { message: "Need authorization for this operation" })
      .end(done);
  });

  it("Should return 401 using bad token in a secured route", (done) => {
    request(app)
      .post("/sensor-events/507f1f77bcf86cd799439011")
      .set("Authorization", "3213546das35as3d1as3d5as3d51")
      .expect(401, { message: "Need authorization for this operation" })
      .end(done);
  });
});
