import { assert, describe, it } from "vitest";
import { httpClient } from "./utils";

describe("/api/newsletter", () => {
	const url = "http://localhost:3000/api/newsletter"; // URL da API

	it("should return 405 if method is not POST", async () => {
		const response = await httpClient.get(url);
		assert.equal(response.status, 405);
		assert.equal(response.statusText, "Method Not Allowed");
	});

	it("should return 400 if email is missing", async () => {
		const response = await httpClient.post(url, {});
		const data = await response.json();
		assert.equal(response.status, 400);
		assert.equal(data.error, "Email inválido");
	});
	
	it("should return 400 if email is invalid", async () => {
		const response = await httpClient.post(url, { email: "invalidemail" });
		const data = await response.json();
		assert.equal(response.status, 400);
		assert.equal(data.error, "Email inválido");
	});
	
	it("should return 200 and success message if email is valid and inserted", async () => {
		const email = `test-${Math.random().toString(36).substring(7)}@example.com`;

		const response = await httpClient.post(url, { email });

		const data = await response.json();
		assert.equal(response.status, 200);
		assert.equal(data.message, "Inscrição realizada com sucesso!");
	});

	it("should return 409 if email already exists", async () => {
		const email = "test@example.com";

		const response = await httpClient.post(url, { email });

		const data = await response.json();
		assert.equal(response.status, 409);
		assert.equal(data.error, "Email já cadastrado");
	});
});
