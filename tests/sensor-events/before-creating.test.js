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

const request = require("supertest");
const initDB = require("../../configs/database");
const app = require("../../app");

before(() => initDB(process.env.DB));

describe("POST /sensor-events/:_id", () => {
  it("Should return 404 if _id doesnt match sensor", (done) => {
    request(app)
      .post("/sensor-events/507f1f77bcf86cd799439011")
      .expect(404, { message: "Could not find associated sensor" })
      .end(done);
  });

  it("Should return 400 if cant cast param to object ID", (done) => {
    request(app)
      .post("/sensor-events/123456")
      .expect(400, { message: "Something went bad with your request." })
      .end(done);
  });
});
