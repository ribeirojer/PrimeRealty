import { assert, describe, it } from "vitest";
import { httpClient } from "../utils";

describe("POST /api/newsletter/send", () => {
  /*it("deve negar acesso se não for admin", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: { subject: "Olá", content: "Mensagem" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(403);
  });

  it("deve enviar newsletter se for admin", async () => {
    const { req, res } = createMocks({
      method: "POST",
      headers: { "x-admin-key": process.env.ADMIN_KEY || "chave_super_secreta" },
      body: { subject: "Olá", content: "Mensagem de teste" },
    });

    await handler(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).message).toBe("Newsletter enviada");
  });*/
});
