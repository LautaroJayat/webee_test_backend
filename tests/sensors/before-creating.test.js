const request = require("supertest");
const app = require("../../app");

describe("POST /sensors", () => {
  it("Should return 400 if missing Name", (done) => {
    request(app)
      .post("/sensors")
      .send({
        name: "",
        location: { latitude: 92.123, longitude: 12.699 },
        minValue: 90,
        maxValue: 60,
      })
      .expect(400, { message: "There is a missing Name for the sensor" })
      .end(done);
  });

  it("Should return 400 if missing Location", (done) => {
    request(app)
      .post("/sensors")
      .send({
        name: "Hello Test",
        //location: { latitude: 92.123, longitude: 12.699 },
        minValue: 90,
        maxValue: 60,
      })
      .expect(400, { message: "There is a missing Location for the sensor" })
      .end(done);
  });
  it("Should return 400 if missing minValue", (done) => {
    request(app)
      .post("/sensors")
      .send({
        name: "Hello Test",
        location: { latitude: 92.123, longitude: 12.699 },
        //minValue: 90,
        maxValue: 60,
      })
      .expect(400, { message: "There is a missing minValue for the sensor" })
      .end(done);
  });
  it("Should return 400 if missing maxValue", (done) => {
    request(app)
      .post("/sensors")
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
