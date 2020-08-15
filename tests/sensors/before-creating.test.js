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
const request = require("supertest");
const app = require("../../app");
const { simpleJWTSign } = require("../../configs/encryption");
const { before } = require("mocha");

// TEST SUITE
describe("POST /sensors", () => {
  before(async () => {
    const JWT = await simpleJWTSign({ payload: "mocking payload" });
  });
  it("Should return 400 if missing Name", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensors")
        .set("Authorization", JWT)
        .send({
          name: "",
          location: { latitude: 92.123, longitude: 12.699 },
          minValue: 90,
          maxValue: 60,
        })
        .expect(400, { message: "There is a missing Name for the sensor" })
        .end(done);
    });
  });

  it("Should return 400 if missing Location", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensors")
        .set("Authorization", JWT)
        .send({
          name: "Hello Test",
          //location: { latitude: 92.123, longitude: 12.699 },
          minValue: 90,
          maxValue: 60,
        })
        .expect(400, { message: "There is a missing Location for the sensor" })
        .end(done);
    });
  });

  it("Should return 400 if missing minValue", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensors")
        .set("Authorization", JWT)
        .send({
          name: "Hello Test",
          location: { latitude: 92.123, longitude: 12.699 },
          //minValue: 90,
          maxValue: 60,
        })
        .expect(400, { message: "There is a missing minValue for the sensor" })
        .end(done);
    });
  });

  it("Should return 400 if missing maxValue", (done) => {
    simpleJWTSign({ payload: "mocking payload" }).then((JWT) => {
      request(app)
        .post("/sensors")
        .set("Authorization", JWT)
        .send({
          name: "Hello Test",
          location: { latitude: 92.123, longitude: 12.699 },
          minValue: 90,
          //maxValue: 60,
        })
        .expect(400, { message: "There is a missing maxValue for the sensor" })
        .end(done);
    });
  });
});
