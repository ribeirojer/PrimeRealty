import { assert, describe, it } from "vitest";
import { httpClient } from "../utils";

describe("GET /api/newsletter/subscribers", () => {
 /* it("deve negar acesso se não for admin", async () => {
    const { req, res } = createMocks({
      method: "GET",
      headers: {},
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
  });

  it("deve retornar lista de inscritos se for admin", async () => {
    const { req, res } = createMocks({
      method: "GET",
      headers: { "x-admin-key": process.env.ADMIN_KEY || "chave_super_secreta" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
  });*/
});
