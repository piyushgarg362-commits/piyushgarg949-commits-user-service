const request = require("supertest");

const app = require("../src/app");

describe("User Service", () => {

  test("Health endpoint", async () => {
    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status)
      .toBe("UP");
  });

  test("Get users", async () => {
    const response = await request(app)
      .get("/users");

    expect(response.statusCode).toBe(200);

    expect(Array.isArray(response.body))
      .toBe(true);
  });

});
